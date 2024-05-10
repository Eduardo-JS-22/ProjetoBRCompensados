import compra from "../models/compra.js";
import ProdutoBusiness from "./produtoBusiness.js";

class CompraBusiness {
    static retornaValorTotalCompra = async (produtos, quantidades) => {
        try {
            let valorTotal = 0;
            for (let i = 0; i < produtos.length; i++) {
                await ProdutoBusiness.adicionarEstoqueProduto(produtos[i], quantidades[i]);
                let valor = await ProdutoBusiness.retornarPrecoCompraProduto(produtos[i]);
                valorTotal += valor * quantidades[i];
            }
            return valorTotal;
        } catch (erro) {
            throw new Error(erro.message);
        }
    };

    static atualizarEstoqueCompra = async (compras) => {
        try {
            const produtos = compras.produtos;
            const quantidades = compras.quantidades;
            for (let i = 0; i < produtos.length; i++) {
                const quantidadeEstoque = await ProdutoBusiness.conferirEstoqueProduto(produtos[i], quantidades[i]);
                if (quantidadeEstoque) {
                    await ProdutoBusiness.retirarEstoqueProduto(produtos[i], quantidades[i]);
                } else {
                    throw new Error(`Erro ao deletar compra: produto ${produtos[i]} conta com menos de ${quantidades[i]} unidades.`)
                }
            }
        } catch (erro) {
            throw new Error(erro.message);
        }
    };
}

export default CompraBusiness;