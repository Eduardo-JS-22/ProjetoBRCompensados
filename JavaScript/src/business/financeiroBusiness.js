import compra from "../models/compra.js";
import venda from "../models/venda.js";
import despesa from "../models/despesa.js";

class FinanceiroBusiness {
    static buscarVendas = async () => {
        try {
            const vendas = await venda.find({});
            let listaVendas = [];
            let valorVendas = 0;
            for (let i = 0; i < vendas.length; i++) {
                listaVendas.push({Venda: vendas[i]._id, Valor: vendas[i].valor});
                valorVendas += vendas[i].valor;
            }
            return [listaVendas, valorVendas];
        } catch (erro) {
            throw new Error(`Erro ao buscar vendas ${erro.message}.`);
        }
    };

    static buscarCompras = async () => {
        try {
            const compras = await compra.find({});
            let listaCompras = [];
            let valorCompras = 0;
            for (let i = 0; i < compras.length; i++) {
                listaCompras.push({Compra: compras[i]._id, Valor: compras[i].valor});
                valorCompras += compras[i].valor;
            }
            return [listaCompras, valorCompras];
        } catch (erro) {
            throw new Error(`Erro ao buscar compras ${erro.message}.`);
        }
    };

    static buscarDespesas = async () => {
        try {
            const despesas = await despesa.find({});
            let listaDespesas = [];
            let valorDespesas = 0;
            for (let i = 0; i < despesas.length; i++) {
                listaDespesas.push({Compra: despesas[i]._id, Valor: despesas[i].valor});
                valorDespesas += despesas[i].valor;
            }
            return [listaDespesas, valorDespesas];
        } catch (erro) {
            throw new Error(`Erro ao buscar despesas ${erro.message}.`);
        }
    };
}

export default FinanceiroBusiness;