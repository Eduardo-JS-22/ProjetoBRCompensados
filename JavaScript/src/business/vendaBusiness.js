import ProdutoBusiness from "./produtoBusiness.js";

class VendaBusiness {
    static retornaValorTotalVenda = async (produtos, quantidades) => {
        try {
            let valorTotal = 0;
            for (let i = 0; i < produtos.length; i++) {
                let estoqueDisponivel = await ProdutoBusiness.conferirEstoqueProduto(produtos[i], quantidades[i])
                if (estoqueDisponivel) {
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
    }
}

export default VendaBusiness;