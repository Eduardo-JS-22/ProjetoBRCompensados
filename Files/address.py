from data import Data

data = Data()

class Address:
    def __init__(self) -> None:
        pass

    def add_address(self, document):
        street = input("\nEndereço: ")
        number = input("Número: ")
        neighborhood = input("Bairro: ")
        city = input("Cidade: ")
        state = input("Estado: ")
        zip = input("CEP: ")

        new_data = {
            "document": document,
            "street": street,
            "number": number,
            "neighborhood": neighborhood,
            "city": city,
            "state": state,
            "zip": zip
        }

        data.add_data(new_data, "address")

    def del_address(self, document):
        data.del_data("address", "document", document)

    def update_address(self, document):
        street = input("\nEndereço: ")
        number = input("Número: ")
        neighborhood = input("Bairro: ")
        city = input("Cidade: ")
        state = input("Estado: ")
        zip = input("CEP: ")

        new_data = {
            "document": document,
            "street": street,
            "number": number,
            "neighborhood": neighborhood,
            "city": city,
            "state": state,
            "zip": zip
        }

        data.update_data("address", "document", document, new_data)
    
    def return_address(self, document):
        return data.return_data_in_json("address", "document", document)