from data import Data

data = Data()

class Purchase:
    def __init__(self) -> None:
        pass

    def add_purchase(self):
        product = []
        quantity = []
        total_value = 0.0
        id = input("\nDigite o número da compra: ")
        document = input("Digite o CNPJ do fornecedor: ")
        name = data.return_supplier_name(document)
        address = data.return_supplier_address(document)
        if (name != None or address != None): # Confere a existência do usuário
            # Adiciona novos produtos
            while True:
                print("\nDigite '0 - Sair' para Sair")
                product_id = input("Digite o código do produto: ")
                if (product_id == "0" or product_id.lower() == "sair"):
                    break
                warehouse_quantity = data.return_product_quantity(product_id)
                if (warehouse_quantity != None): # Confere a existência do produto
                    product_quantity = input("Digite a quantidade: ")
                    product.append(product_id)
                    quantity.append(int(product_quantity))
                    data.update_product("sum", product_id, int(product_quantity)) # Adiciona os produtos do estoque
                else:
                    print(f"\nProduto Não Localizado com o ID {product_id}")
            type_of_payment = input("Digite o tipo de pagamento: ")

            # Calcula o valor total da compra
            for i in range(len(product)):
                value = data.return_product_buy_price(product[i])
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

            data.add_data(new_data, "purchase")
            print("\nCompra Cadastrada como Sucesso!")
        else:
            print(f"\nFornecedor Não Localizado com Documento {document}.")

    def del_purchase(self):
        id = input("\nDigite o Código da Compra: ")
        purchase = data.return_data_in_json("purchase", "id", id)
        if (purchase != None): # Confere a existência da compra
            # Retira os produtos do estoque
            for i in range(len(purchase["product"])):
                data.update_product("sub", purchase["product"][i], purchase["quantity"][i])
            data.del_data("purchase", "id", id)
            print("\nCompra Excluída com Sucesso.")
        else:
            print(f"\nCompra não Localizada com o ID {id}.")

    def update_purchase(self):
        product = []
        quantity = []
        total_value = 0.0    
        id = input("\nDigite o número da compra: ")
        purchase = data.return_data_in_json("purchase", "id", id)
        if (purchase != None): # Confere a existência da compra
            # Retira os produtos do estoque
            for i in range(len(purchase["product"])):
                data.update_product("sub", purchase["product"][i], purchase["quantity"][i])        
            document = input("Digite o CNPJ do fornecedor: ")
            name = data.return_supplier_name(document)
            address = data.return_supplier_address(document)
            if (name != None or address != None): # Confere a existência do usuário
                # Adiciona novos produtos
                while True:
                    print("\nDigite '0 - Sair' para Sair")
                    product_id = input("Digite o código do produto: ")
                    if (product_id == "0" or product_id.lower() == "sair"):
                        break
                    warehouse_quantity = data.return_product_quantity(product_id)
                    if (warehouse_quantity != None): # Confere a existência do produto
                        product_quantity = input("Digite a quantidade: ")
                        product.append(product_id)
                        quantity.append(int(product_quantity))
                        data.update_product("sub", product_id, int(product_quantity)) # Retira os produtos do estoque
                    else:
                        print(f"\nProduto Não Localizado com o ID {product_id}")
                type_of_payment = input("Digite o tipo de pagamento: ")

                # Calcula o novo valor total da compra
                for i in range(len(product)):
                    value = data.return_product_buy_price(product[i])
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

                data.update_data("purchase", "id", id, new_data)
                print("\nCompra Atualizada como Sucesso!")
            else:
                print(f"\nFornecedor Não Localizado com Documento {document}.")
        else:
            print(f"\nCompra Não Localizada com ID {id}")

    def print_purchases(self):
        purchase_data = data.return_class_data_in_json("purchase")

        if(len(purchase_data) != None): # Confere a existência das compras
            for purchase in purchase_data:
                print(f"\nID: {purchase["id"]}")
                print(f"Documento do Cliente: {purchase["document"]}")
                print(f"Nome do Cliente: {purchase["name"]}")
                print(f"Endereço do Cliente: {purchase["address"]}")
                for i in range(len(purchase["product"])):
                    print(f"Produto: {purchase["product"][i]}")
                    print(f"Quantidade: {purchase["quantity"][i]}")
                print(f"Tipo de Pagamento: {purchase["type_of_payment"]}")
                print(f"Valor Total: R${purchase["total_value"]}")
        else:
            print("\nNenhuma Compra Cadastrada.")