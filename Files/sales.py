from data import Data

data = Data()

class Sales:
    def __init__(self) -> None:
        pass
    
    def add_sales(self):
        product = []
        quantity = []
        total_value = 0.0
        id = input("\nDigite o número da venda: ")
        document = input("Digite o CPF ou CNPJ do cliente: ")
        name = data.return_client_name(document)
        address = data.return_client_address(document)
        if (name != None or address != None): # Confere a existência do usuário
            # Adiciona novos produtos
            while True:
                print("\nDigite '0 - Sair' para Sair")
                product_id = input("Digite o código do produto: ")
                if (product_id == "0" or product_id.lower() == "sair"):
                    break
                product_quantity = input("Digite a quantidade: ")
                warehouse_quantity = data.return_product_quantity(product_id)
                if (warehouse_quantity != None): # Confere a existência do produto
                    if (int(product_quantity) > warehouse_quantity):
                        print(f"\nQuantidade de Produtos Indisponível. Ha Apenas {warehouse_quantity} Unidades.")
                    else:
                        product.append(product_id)
                        quantity.append(int(product_quantity))
                        data.update_product("sub", product_id, int(product_quantity)) # Retira os produtos do estoque
                else:
                    print(f"\nProduto Não Localizado com o ID {product_id}")
            type_of_payment = input("Digite o tipo de pagamento: ")

            # Calcula o valor total da venda
            for i in range(len(product)):
                value = data.return_product_price(product[i])
                total_value += value * quantity[i]

            new_data = {
                "id": id,
                "document": document,
                "name": name,
                "address": address,
                "product": product,
                "quantity": quantity,
                "type_of_payment": type_of_payment,
                "total_value": total_value
            }

            data.add_data(new_data, "sales")
            print("\nVenda Cadastrada como Sucesso!")
        else:
            print(f"\nCliente Não Localizado com Documento {document}.")
    
    def del_sales(self):
        id = input("\nDigite o Código da Venda: ")
        sales = data.return_data_in_json("sales", "id", id)
        if (sales != None): # Confere a existência da venda
            # Retorna os produtos para o estoque
            for i in range(len(sales["product"])):
                data.update_product("sum", sales["product"][i], sales["quantity"][i])
            data.del_data("sales", "id", id)
            print("\nVenda Excluída com Sucesso.")
        else:
            print(f"\nVenda não Localizada com o ID {id}.")
    
    def update_sales(self):
        product = []
        quantity = []
        total_value = 0.0    
        id = input("\nDigite o número da venda: ")
        sales = data.return_data_in_json("sales", "id", id)
        if (sales != None):  # Confere a existência da venda
            # Retorna os produtos para o estoque
            for i in range(len(sales["product"])):
                data.update_product("sum", sales["product"][i], sales["quantity"][i])        
            document = input("Digite o CPF ou CNPJ do cliente: ")
            name = data.return_client_name(document)
            address = data.return_client_address(document)
            if (name != None or address != None): # Confere a existência do usuário
                # Adiciona novos produtos
                while True:
                    print("\nDigite '0 - Sair' para Sair")
                    product_id = input("Digite o código do produto: ")
                    if (product_id == "0" or product_id.lower() == "sair"):
                        break
                    product_quantity = input("Digite a quantidade: ")
                    warehouse_quantity = data.return_product_quantity(product_id)
                    if (warehouse_quantity != None): # Confere a existência do produto
                        if (int(product_quantity) > warehouse_quantity):
                            print(f"\nQuantidade de Produtos Indisponível. Ha Apenas {warehouse_quantity} Unidades.")
                        else:
                            product.append(product_id)
                            quantity.append(int(product_quantity))
                            data.update_product("sub", product_id, int(product_quantity)) # Retira os produtos do estoque
                    else:
                        print(f"\nProduto Não Localizado com o ID {product_id}")
                type_of_payment = input("Digite o tipo de pagamento: ")

                # Calcula o novo valor total da venda
                for i in range(len(product)):
                    value = data.return_product_price(product[i])
                    total_value += value * quantity[i]

                new_data = {
                    "id": id,
                    "document": document,
                    "name": name,
                    "address": address,
                    "product": product,
                    "quantity": quantity,
                    "type_of_payment": type_of_payment,
                    "total_value": total_value
                }

                data.update_data("sales", "id", id, new_data)
                print("\nVenda Atualizada como Sucesso!")
            else:
                print(f"\nCliente Não Localizado com Documento {document}.")
        else:
            print(f"\nVenda Não Localizada com o ID {id}")

    def print_sales(self):
        sales_data = data.return_class_data_in_json("sales")
        
        if(len(sales_data) != 0):  # Confere a existência das vendas
            for sales in sales_data:
                print(f"\nID: {sales["id"]}")
                print(f"Documento do Cliente: {sales["document"]}")
                print(f"Nome do Cliente: {sales["name"]}")
                print(f"Endereço do Cliente: {sales["address"]}")
                for i in range(len(sales["product"])):
                    print(f"Produto: {sales["product"][i]}")
                    print(f"Quantidade: {sales["quantity"][i]}")
                print(f"Tipo de Pagamento: {sales["type_of_payment"]}")
                print(f"Valor Total: R${sales["total_value"]}")
        else:
            print("\nNenhuma Venda Cadastrada.")