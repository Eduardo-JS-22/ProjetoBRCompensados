from data import Data

data = Data()

class Expense:
    def __init__(self) -> None:
        pass

    def add_expense(self):
        id = input("\nDigite o Código da Despesa: ")
        name = input("Digite o Nome da Despesa: ")
        description = input("Digite a Descrição da Despesa: ")
        expense_price = input("Digite o Valor da Despesa: R$")

        new_data = {
            "id": id,
            "name": name,
            "description": description,
            "expense_price": float(expense_price)
        }

        data.add_data(new_data, "expense")
        print("\nDespesa Cadastrada com Sucesso!")

    def del_expense(self):
        id = input("\nDigite o Código da Despesa: ")
        expense = data.return_data_in_json("expense", "id", id)
        if (expense != None): # Confere a existência da despesa
            data.del_data("expense", "id", id)
            print("\nDespesa Excluída com Sucesso.")
        else:
            print(f"\nDespesa não Localizada com o ID {id}.")

    def update_expense(self):
        id = input("\nDigite o Código da Despesa: ")
        expense = data.return_data_in_json("expense", "id", id)
        if (expense != None): # Confere a existência da despesa
            name = input("Digite o Nome da Despesa: ")
            description = input("Digite a Descrição da Despesa: ")
            expense_price = input("Digite o Valor da Despesa: R$")

            new_data = {
                "id": id,
                "name": name,
                "description": description,
                "expense_price": float(expense_price)
            }

            data.update_data("expense", "id", id, new_data)
            print("\nDespesa Atualizada com Sucesso.")
        else:
            print(f"\nDespesa não Localizada com o ID {id}.")

    def print_expense(self):
        expense_data = data.return_class_data_in_json("expense")

        if(len(expense_data) != 0): # Confere a existência da despesa
            for expense in expense_data:
                print(f"\nID: {expense["id"]}")
                print(f"Nome da Despesa: {expense["name"]}")
                print(f"Descrição: {expense["description"]}")
                print(f"Valor da Despesa: R${expense["expense_price"]}")
        else:
            print("\nNenhuma Compra Cadastrada.")