import compra from "../models/compra.js";
import CompraBusiness from "../business/compraBusiness.js";

class CompraController {
    static listarCompras = async (req, res) => {
        try {
            const listaCompras = await compra.find({}).populate(["fornecedor", "endereco", "produtos"]).exec();
            res.status(200).json(listaCompras);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar compras.", erro: erro.message});
        }
    };

    static buscarCompra = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await compra.findById(id).populate(["fornecedor", "endereco", "produtos"]).exec();
            res.status(200).json(resultadoBusca);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao buscar compra.", erro: erro.message});
        }
    };

    static cadastrarCompra = async (req, res) => {
        try {
            const produtos = req.body.produtos;
            const quantidades = req.body.quantidades;
            req.body.valor = await CompraBusiness.retornaValorTotalCompra(produtos, quantidades);
            const novaCompra = await compra.create(req.body);
            res.status(200).json({mensagem: "Compra cadastrada com sucesso.", compra: novaCompra});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar compra.", erro: erro.message});
        }
    };

    static atualizarCompra = async (req, res) => {
        try {
            const id = req.params.id;
            const compras = await compra.findById(id);
            await CompraBusiness.atualizarEstoqueCompra(compras);
            const produtos = req.body.produtos;
            const quantidades = req.body.quantidades;
            req.body.valor = await CompraBusiness.retornaValorTotalCompra(produtos, quantidades);
            await compra.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Compra atualizada com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar compra.", erro: erro.message});
        }
    };

    static deletarCompra = async (req, res) => {
        try {
            const id = req.params.id;
            const compras = await compra.findById(id);
            await CompraBusiness.atualizarEstoqueCompra(compras);
            await compra.findByIdAndDelete(id);
            res.status(200).json({mensagem: "Compra deletada com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar compra.", erro: erro.message});
        }
    };
}

export default CompraController;