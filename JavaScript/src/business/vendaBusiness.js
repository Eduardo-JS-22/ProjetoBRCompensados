import ProdutoBusiness from "./produtoBusiness.js";

class VendaBusiness {
    static retornaValorTotalVenda = async (produtos, quantidades) => {
        try {
            let valorTotal = 0;
            for (let i = 0; i < produtos.length; i++) {
                let estoqueDisponivel = await ProdutoBusiness.conferirEstoqueProduto(produtos[i], quantidades[i])
                if (estoqueDisponivel) {
                    await ProdutoBusiness.retirarEstoqueProduto(produtos[i], quantidades[i]);
                    let valor = await ProdutoBusiness.retornarPrecoVendaProduto(produtos[i]);
                    valorTotal += valor * quantidades[i];
                } else {
                    throw new Error(`Erro ao processar venda: produto ${produtos[i]} conta com menos de ${quantidades[i]} unidades.`);
                }
            }
            return valorTotal;
        } catch (erro) {
            throw new Error(erro.message);
        }
    };

    static atualizarEstoqueVenda = async (vendas) => {
        try {
            const produtos = vendas.produtos;
            const quantidades = vendas.quantidades;
            for (let i = 0; i < produtos.length; i++) {
                await ProdutoBusiness.adicionarEstoqueProduto(produtos[i], quantidades[i]);
            }
        } catch (erro) {
            throw new Error(erro.message);
        }
    };
}

export default VendaBusiness;