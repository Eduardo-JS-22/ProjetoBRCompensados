from data import Data
from address import Address

data = Data()
address = Address()

class Client:
    def __init__(self) -> None:
        pass
    
    def add_client(self):
        name = input("\nNome do Cliente: ")
        document = input("CPF ou CNPJ do Cliente: ")
        phone = input("Telefone do Cliente: ")
        email = input("E-Mail do Cliente: ")
        
        new_data = {
            "name": name,
            "document": document,
            "phone": phone,
            "email": email
        }

        data.add_data(new_data, "client")
        address.add_address(document)
        print("\nCliente cadastrado com sucesso.")

    def del_client(self):
        document = input("\nDigite o CPF ou CNPJ do Cliente: ")
        verify = data.return_data_in_json("client", "document", document)
        if (verify != None): # Confere a existência do cliente
            data.del_data("client", "document", document)
            address.del_address(document)
            print("\nCliente Excluído com Sucesso.")
        else:
            print(f"\nCliente Não Localizado com o Documento {document}.")

    def update_client(self):
        document = input("CPF ou CNPJ do Cliente: ")
        verify = data.return_data_in_json("client", "document", document)
        if (verify != None): # Confere a existência do cliente
            name = input("\nNome do Cliente: ")
            phone = input("Telefone do Cliente: ")
            email = input("E-Mail do Cliente: ")
            
            new_data = {
                "name": name,
                "document": document,
                "phone": phone,
                "email": email
            }

            data.update_data("client", "document", document, new_data)
            address.update_address(document)
            print("\nDados do Cliente Atualizado com Sucesso!")
        else:
            print(f"\nCliente Não Localizado com o Documento {document}.")

    def print_clients(self):
        client_data = data.return_class_data_in_json("client")

        if (len(client_data) != 0): # Confere a existência dos clientes
            for client in client_data:
                print(f"\nNome: {client["name"]}")
                print(f"Documento: {client["document"]}")
                print(f"Telefone: {client["phone"]}")
                print(f"E-Mail: {client["email"]}")
                client_address = address.return_address(client["document"])
                print(f"Endereço: {client_address["street"]}")
                print(f"Número: {client_address["number"]}")
                print(f"Bairro: {client_address["neighborhood"]}")
                print(f"Cidade: {client_address["city"]}")
                print(f"Estado: {client_address["state"]}")
                print(f"CEP: {client_address["zip"]}")
        else:
            print("Nenhum Cliente Cadastrado.")
    
    def print_client(self):
        document = input("\nDigite o CPF ou CNPJ do Cliente: ")
        client_data = data.return_data_in_json("client", "document", document)

        if (client_data != None): # Confere a existência do cliente
            client_address = address.return_address(document)

            print(f"\nNome: {client_data["name"]}")
            print(f"Documento: {client_data["document"]}")
            print(f"Telefone: {client_data["phone"]}")
            print(f"E-Mail: {client_data["email"]}")
            print(f"Endereço: {client_address["street"]}")
            print(f"Número: {client_address["number"]}")
            print(f"Bairro: {client_address["neighborhood"]}")
            print(f"Cidade: {client_address["city"]}")
            print(f"Estado: {client_address["state"]}")
            print(f"CEP: {client_address["zip"]}")
        else:
            print(f"\nCliente Não Localizado com o Documento {document}.")