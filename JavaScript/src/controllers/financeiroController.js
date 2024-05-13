import FinanceiroBusiness from "../business/financeiroBusiness.js";

class FinanceiroController {
    static listarFinanceiro = async (req, res) => {
        try {
            const vendas = await FinanceiroBusiness.buscarVendas();
            const compras = await FinanceiroBusiness.buscarCompras();
            const despesas = await FinanceiroBusiness.buscarDespesas();
            const valorTotal = vendas[1] - compras[1] -despesas[1];
            res.status(200).json({
                Vendas: vendas[0],
                Total_Vendas: vendas[1],
                Compras: compras[0],
                Total_Compras: compras[1],
                Despesas: despesas[0],
                Total_Despesas: despesas[1],
                Total: valorTotal
            });
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar financeiro.", erro: erro.message});
        }
    };

    static listarVendas = async (req, res) => {
        try {
            const vendas = await FinanceiroBusiness.buscarVendas();
            res.status(200).json({Vendas: vendas[0], Total: vendas[1]});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar vendas.", erro: erro.message});
        }
    };

    static listarCompras = async (req, res) => {
        try {
            const compras = await FinanceiroBusiness.buscarCompras();
            res.status(200).json({Compras: compras[0], Total: compras[1]});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar compras.", erro: erro.message});
        }
    };

    static listarDespesas = async (req, res) => {
        try {
            const despesas = await FinanceiroBusiness.buscarDespesas();
            res.status(200).json({Despesas: despesas[0], Total: despesas[1]});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar despesas.", erro: erro.message});
        }
    };
}

export default FinanceiroController;