from client import Client
from expense import Expense
from finance import Finance
from product import Product
from purchase import Purchase
from sales import Sales
from supplier import Supplier
import os

def main():

    client = Client()
    expense = Expense()
    finance = Finance()
    product = Product()
    purchase = Purchase()
    sales = Sales()
    supplier = Supplier()

    while True:
        print("\n==================\n")
        print("1 - Cliente\n2 - Fornecedor\n3 - Estoque\n4 - Venda\n5 - Compra\n6 - Financeiro\n7 - Sair")
        option = input("Digite uma opção: ")
        os.system("cls") # Windows
        #os.system("clear") # Mac/Linux

        if (option == "1" or option.lower() == "cliente"): # Área Cliente
            while True:
                print("\n==================\n")
                print("1 - Novo Cliente\n2 - Excluir Cliente\n3 - Atualizar Cliente\n4 - Listar Clientes\n5 - Buscar Cliente\n6 - Voltar")
                option_client = input("Digite uma opção: ")
                os.system("cls") # Windows
                #os.system("clear") # Mac/Linux

                if (option_client == "1" or option_client.lower() == "novo cliente"): # Cadastrar Novo Cliente
                    client.add_client()
                
                elif (option_client == "2" or option_client.lower() == "excluir cliente"): # Excluir um Cliente
                    client.del_client()
                
                elif (option_client == "3" or option_client.lower() == "atualizar cliente"): # Atualizar Dados do Cliente
                    client.update_client()

                elif (option_client == "4" or option_client.lower() == "listar clientes"): # Lista Todos os Clientes
                    client.print_clients()
                
                elif (option_client == "5" or option_client.lower() == "buscar cliente"): # Busca um Cliente
                    client.print_client()
                
                elif (option_client == "6" or option_client.lower() == "voltar"): # Volta pro Menu Principal
                    break

                else:
                    print("\nOpção não disponível.")

        elif (option == "2" or option.lower() == "fornecedor"): # Área Fornecedor
            while True:
                print("\n==================\n")
                print("1 - Novo Fornecedor\n2 - Excluir Fornecedor\n3 - Atualizar Fornecedor\n4 - Listar Fornecedores\n5 - Buscar Fornecedor\n6 - Voltar")
                option_supplier = input("Digite uma opção: ")
                os.system("cls") # Windows
                #os.system("clear") # Mac/Linux

                if (option_supplier == "1" or option_supplier.lower() == "novo fornecedor"): # Cadastrar Novo Fornecedor
                    supplier.add_supplier()

                elif (option_supplier == "2" or option_supplier.lower() == "excluir fornecedor"): # Exclui um Fornecedor
                    supplier.del_supplier()
                    
                elif (option_supplier == "3" or option_supplier.lower() == "atualizar fornecedor"): # Atualiza Dados do Fornecedor
                    supplier.update_supplier()

                elif (option_supplier == "4" or option_supplier.lower() == "listar fornecedores"): # Lista Todos os Fornecedores
                    supplier.print_suppliers()

                elif (option_supplier == "5" or option_supplier.lower() == "buscar fornecedor"): # Busca um Fornecedor
                    supplier.print_supplier()

                elif (option_supplier == "6" or option_supplier.lower() == "voltar"): # Volta pro Menu Principal
                    break

                else:
                    print("\nOpção não disponível.")

        elif (option == "3" or option.lower() == "estoque"): # Área Estoque
            while True:
                print("\n==================\n")
                print("1 - Adicionar Estoque\n2 - Excluir Estoque\n3 - Listar Estoque\n4 - Atualizar Estoque\n5 - Voltar")
                option_product = input("Digite uma opção: ")
                os.system("cls") # Windows
                #os.system("clear") # Mac/Linux

                if (option_product == "1" or option_product.lower() == "adicionar estoque"): # Adicionar Novo Estoque
                    product.add_product()

                elif (option_product == "2" or option_product.lower() == "excluir estoque"): # Excluir Estoque
                    product.del_product()

                elif (option_product == "3" or option_product.lower() == "listar estoque"): # Listar Estoque
                    product.print_products()
                
                elif (option_product == "4" or option_product.lower() == "atualizar estoque"): # Atualizar Estoque
                    product.update_product()

                elif (option_product == "5" or option_product.lower() == "voltar"): # Volta pro Menu Principal
                    break

                else:
                    print("\nOpção não disponível.")

        elif (option == "4" or option.lower() == "venda"): # Área Venda
            while True:
                print("\n==================\n")
                print("1 - Nova Venda\n2 - Excluir Venda\n3 - Listar Vendas\n4 - Atualizar Venda\n5 - Voltar")
                option_sales = input("Digite uma opção: ")
                os.system("cls") # Windows
                #os.system("clear") # Mac/Linux

                if (option_sales == "1" or option_sales.lower() == "nova venda"): # Adicionar Nova Venda
                    sales.add_sales()

                elif (option_sales == "2" or option_sales.lower() == "excluir venda"): # Excluir uma Venda
                    sales.del_sales()

                elif (option_sales == "3" or option_sales.lower() == "listar vendas"): # Lista as Vendas
                    sales.print_sales()
                
                elif (option_sales == "4" or option_sales.lower() == "atualizar venda"): # Edita uma Venda
                    sales.update_sales()

                elif (option_sales == "5" or option_sales.lower() == "voltar"): # Volta pro Menu Principal
                    break

                else:
                    print("\nOpção não disponível.")

        elif (option == "5" or option.lower() == "compra"):
            while True:
                print("\n==================\n")
                print("1 - Nova Compra\n2 - Excluir Compra\n3 - Listar Compras\n4 - Atualizar Compra\n5 - Voltar")
                option_purchase = input("Digite uma opção: ")
                os.system("cls") # Windows
                #os.system("clear") # Mac/Linux

                if (option_purchase == "1" or option_purchase.lower() == "nova compra"): # Adicionar Nova Compra
                    purchase.add_purchase()

                elif (option_purchase == "2" or option_purchase.lower() == "excluir compra"): # Excluir uma Compra
                    purchase.del_purchase()

                elif (option_purchase == "3" or option_purchase.lower() == "listar compras"): # Lista as Compras
                    purchase.print_purchases()
                
                elif (option_purchase == "4" or option_purchase.lower() == "atualizar compra"): # Edita uma Venda
                    purchase.update_purchase()

                elif (option_purchase == "5" or option_purchase.lower() == "voltar"): # Volta pro Menu Principal
                    break

                else:
                    print("\nOpção não disponível.")

        elif (option == "6" or option.lower() == "financeiro"):
            while True:
                print("\n==================\n")
                print("1 - Listar Vendas\n2 - Listar Compras\n3 - Listar Despesas\n4 - Balanço\n5 - Despesas\n6 - Voltar")
                option_finance = input("Digite uma opção: ")
                os.system("cls") # Windows
                #os.system("clear") # Mac/Linux

                if (option_finance == "1" or option_finance.lower() == "listar vendas"): # Mostra as Vendas
                    finance.print_sales()
                elif (option_finance == "2" or option_finance.lower() == "listar compras"): # Mostra as Compras
                    finance.print_purchases()
                elif (option_finance == "3" or option_finance.lower() == "listar despesas"): # Mostra as Despesas
                    finance.print_expense()
                elif (option_finance == "4" or option_finance.lower() == "listar balanço" or option_finance.lower() == "listar balanco"): # Mostra o Balanço
                    finance.print_balance()
                elif (option_finance == "5" or option_finance.lower() == "despesas"): # Área de Despesas
                    while True:
                        print("\n==================\n")
                        print("1 - Nova Despesa\n2 - Excluir Despesa\n3 - Listar Despesas\n4 - Atualizar Despesa\n5 - Voltar")
                        option_expense = input("Digite uma opção: ")
                        os.system("cls") # Windows
                        #os.system("clear") # Mac/Linux

                        if (option_expense == "1" or option_expense.lower() == "nova despesa"):
                            expense.add_expense()
                        elif (option_expense == "2" or option_expense.lower() == "excluir despesa"):
                            expense.del_expense()
                        elif (option_expense == "3" or option_expense.lower() == "listar despesas"):
                            expense.print_expense()
                        elif (option_expense == "4" or option_expense.lower() == "atualizar despesa"):
                            expense.update_expense()
                        elif (option_expense == "5" or option_expense.lower() == "voltar"):
                            break
                        else:
                            print("\nOpção não disponível.")
                elif (option_finance == "6" or option_finance.lower() == "voltar"): # Volta pro Menu Principal
                    break
                else:
                    print("\nOpção não dispoinível.")

        elif (option == "7" or option.lower() == "sair"):
            print("\nSaindo\n")
            break

        else:
            print("\nOpção não disponível.")

if __name__ == "__main__":
    main()