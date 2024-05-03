from data import Data

data = Data()

class Product:
    def __init__(self) -> None:
        pass

    def add_product(self):
        id = input("\nDigite o código do produto: ")
        length = input("Digite o comprimento (cm): ")
        width = input("Digite a largura (cm): ")
        thickness = input("Digite a espessura (mm): ")
        type_of_glue = input("Digite o tipo de cola: ")
        quantity = input("Digite a quantidade: ")
        purchase_price = input("Digite o valor de compra: R$")
        sales_price = input("Digite o valor de venda: R$")

        new_data = {
            "id": id,
            "length": int(length),
            "width": int(width),
            "thickness": int(thickness),
            "type_of_glue": type_of_glue,
            "quantity": int(quantity),
            "purchase_price": float(purchase_price),
            "sales_price": float(sales_price)
        }

        data.add_data(new_data, "product")
        print("\nProduto Cadastrado com Sucesso!")

    def del_product(self):
        id = input("\nDigite o Código do Produto: ")
        verify = data.return_data_in_json("product", "id", id)
        if (verify != None): # Confere a existência do produto
            data.del_data("product", "id", id)
            print("\nProduto Excluído com Sucesso.")
        else:
            print(f"\nProduto Não Localizado com o ID {id}.")
    
    def update_product(self):
        id = input("\nDigite o código do produto: ")
        verify = data.return_data_in_json("product", "id", id)
        if (verify != None): # Confere a existência do produto
            length = input("Digite o comprimento (cm): ")
            width = input("Digite a largura (cm): ")
            thickness = input("Digite a espessura (mm): ")
            type_of_glue = input("Digite o tipo de cola: ")
            quantity = input("Digite a quantidade: ")
            purchase_price = input("Digite o valor de compra: R$")
            sales_price = input("Digite o valor: R$")

            new_data = {
                "id": id,
                "length": int(length),
                "width": int(width),
                "thickness": int(thickness),
                "type_of_glue": type_of_glue,
                "quantity": int(quantity),
                "purchase_price": float(purchase_price),
                "sales_price": float(sales_price)
            }

            data.update_data("product", "id", id, new_data)
            print("\nProduto Atualizado com Sucesso!")
        else:
            print(f"\nProduto Não Localizado com o ID {id}.")

    def print_products(self):
        product_data = data.return_class_data_in_json("product")

        if (len(product_data) != 0): # Confere a existência dos produtos
            for product in product_data:
                print(f"\nID: {product["id"]}")
                print(f"Comprimento: {product["length"]} cm")
                print(f"Largura: {product["width"]} cm")
                print(f"Espessura: {product["thickness"]} mm")
                print(f"Tipo de Cola: {product["type_of_glue"]}")
                print(f"Quantidade: {product["quantity"]}")
                print(f"Valor de Compra: R${product["purchase_price"]}")
                print(f"Valor de Venda: R${product["sales_price"]}")
        else:
            print("\nNenhum Produto Cadastrado.")