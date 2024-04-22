import json

class Data:
    def __init__(self) -> None:
        pass

    def add_data(self, new_data, class_name):
        try:
            with open("data.json","r+", encoding="utf-8") as file:
                file_data = json.load(file)
                file_data[class_name].append(new_data)
                file.seek(0)
                json.dump(file_data, file, indent = 4)
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except json.JSONDecodeError:
            print("Erro ao decodificar o JSON.")
    
    def del_data(self, class_name, value_name, value):
        try:
            index = Data().return_position_in_json(class_name, value_name, value)
            with open("data.json", "r+", encoding="utf-8") as file:
                file_data = json.load(file)
                del file_data[class_name][index]
                file.seek(0)
                json.dump(file_data, file, indent=4)
                file.truncate()
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave {value_name} não encontrada no JSON.")
    
    def update_data(self, class_name, value_name, id, new_value):
        try:
            with open("data.json", 'r', encoding='utf-8') as file:
                file_data = json.load(file)
            
            for data in file_data[class_name]:
                if data.get(value_name) == id:
                    data.update(new_value)
                    break

            with open("data.json", 'w', encoding='utf-8') as file:
                json.dump(file_data, file, indent=4)
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave {value_name} não encontrada no JSON.")
        except Exception as e:
            print(f"Erro ao salvar o arquivo JSON: {e}")

    def return_data_in_json(self, class_name, value_name, value):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
                
            for data in data_json[class_name]:
                if data[value_name] == value:
                    return data
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave {value_name} não encontrada no JSON.")
    
    def return_class_data_in_json(self, class_name):
        try:
            data_return = []
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
                
            for data in data_json[class_name]:
                data_return.append(data)
            
            return data_return
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")

    def return_position_in_json(self, class_name, value_name, value):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
            for index, list_json in enumerate(data_json[class_name]):
                if list_json[value_name] == value:
                    return index
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave {value_name} não encontrada no JSON.")
    
    def return_product_quantity(self, product_id):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)

            for data in data_json["product"]:
                if data["id"] == product_id:
                    return data["quantity"]
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'id' não encontrada no JSON.")
    
    def return_product_price(self, product_id):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)

            for data in data_json["product"]:
                if data["id"] == product_id:
                    return data["sales_price"]
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'id' não encontrada no JSON.")
    
    def return_product_buy_price(self, product_id):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)

            for data in data_json["product"]:
                if data["id"] == product_id:
                    return data["purchase_price"]
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'id' não encontrada no JSON.")
    
    def update_product(self, function, product_id, product_quantity):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)

            for product in data_json["product"]:
                if product["id"] == product_id:
                    if (function == "sum"):
                        product["quantity"] += product_quantity
                    else:
                        product["quantity"] -= product_quantity
                    break

            with open("data.json", "w", encoding="utf-8") as file:
                json.dump(data_json, file, indent=4)
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'id' não encontrada no JSON.")
        except Exception as e:
            print(f"Erro ao salvar o arquivo JSON: {e}")
    
    def return_client_name(self, document):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
            
            for client in data_json["client"]:
                if client["document"] == document:
                    return client["name"]
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'document' não encontrada no JSON.")
    
    def return_client_address(self, document):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
            
            for address in data_json["address"]:
                if address["document"] == document:
                    return f"{address["street"]} {address["number"]}, {address["neighborhood"]}, {address["city"]} - {address["state"]}, {address["zip"]}"
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'document' não encontrada no JSON.")
    
    def return_supplier_name(self, document):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
            
            for supplier in data_json["supplier"]:
                if supplier["document"] == document:
                    return supplier["name"]
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'document' não encontrada no JSON.")
    
    def return_supplier_address(self, document):
        try:
            with open("data.json", "r", encoding="utf-8") as file:
                data_json = json.load(file)
            
            for address in data_json["address"]:
                if address["document"] == document:
                    return f"{address["street"]} {address["number"]}, {address["neighborhood"]}, {address["city"]} - {address["state"]}, {address["zip"]}"
        except FileNotFoundError:
            print("Arquivo data.json não encontrado.")
        except KeyError:
            print(f"Chave 'document' não encontrada no JSON.")