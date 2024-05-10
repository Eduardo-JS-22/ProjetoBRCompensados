import produto from "../models/produto.js";

class ProdutoBusiness {
    static retornarPrecoVendaProduto = async (produtoId) => {
        try {
            const produtoBuscado = await produto.findById(produtoId);
            return produtoBuscado.preco_venda;
        } catch (erro) {
            throw new Error(erro.message);
        }
    };

    static conferirEstoqueProduto = async (produtoId, quantidade) => {
        try {
            const produtoBuscado = await produto.findById(produtoId);
            const quantidadeProduto = produtoBuscado.quantidade;
            return quantidade <= quantidadeProduto;
        } catch (erro) {
            throw new Error(erro.message);
        }
    };

    static retirarEstoqueProduto = async (produtoId, quantidade) => {
        try {
            let produtoBuscado = await produto.findById(produtoId);
            produtoBuscado.quantidade -= quantidade;
            await produto.findByIdAndUpdate(produtoId, produtoBuscado);
        } catch (erro) {
            throw new Error(erro.message);
        }
    };

    static adicionarEstoqueProduto = async (produtoId, quantidade) => {
        try {
            let produtoBuscado = await produto.findById(produtoId);
            produtoBuscado.quantidade += quantidade;
            await produto.findByIdAndUpdate(produtoId, produtoBuscado);
        } catch (erro) {
            throw new Error(erro.message);
        }
    };

    static retornarPrecoCompraProduto = async (produtoId) => {
        try {
            const produtoBuscado = await produto.findById(produtoId);
            return produtoBuscado.preco_compra;
        } catch (erro) {
            throw new Error(erro.message);
        }
    };
}

export default ProdutoBusiness;