import produto from "../models/produto.js";

class ProdutoController {
    static listarProdutos = async (req, res) => {
        try {
            const listaProdutos = await produto.find({});
            res.status(200).json(listaProdutos);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar produtos.", erro: erro.message});
        }
    };

    static buscarProduto = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await produto.findById(id);
            res.status(500).json(resultadoBusca);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao buscar produto.", erro: erro.message});
        }
    };

    static cadastrarProduto = async (req, res) => {
        try {
            const novoProduto = produto.create(req.body);
            res.status(200).json({mensagem: "Produto criado com sucesso.", produto: novoProduto});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar produto.", erro: erro.message});
        }
    };

    static atualizarProduto = async (req, res) => {
        try {
            const id = req.params.id;
            await produto.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Produto atualizado com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar produto.", erro: erro.message});
        }
    };

    static deletarProduto = async (req, res) => {
        try {
            const id = req.params.id;
            await produto.findByIdAndDelete(id);
            res.status(200).json({mensagem: "Produto deletado com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar produto.", erro: erro.message});
        }
    }
}

export default ProdutoController;