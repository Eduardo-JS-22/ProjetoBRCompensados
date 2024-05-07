import fornecedor from "../models/fornecedor.js";

class FornecedorController {
    static listarFornecedores = async (req, res) => {
        try {
            const listaFornecedores = await fornecedor.find({}).populate("endereco").exec();
            res.status(200).json(listaFornecedores);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar fornecedores.", erro: erro.message});
        }
    };

    static buscaFornecedor = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await fornecedor.findById(id).populate("endereco").exec();
            res.status(200).json(resultadoBusca);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao buscar fornecedor.", erro: erro.message});
        }
    };

    static cadastrarFornecedor = async (req, res) => {
        try {
            const novoFornecedor = await fornecedor.create(req.body);
            res.status(500).json({mensagem: "Fornecedor criado com sucesso.", fornecedor: novoFornecedor});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar fornecedor.", erro: erro.message});
        }
    };

    static atualizarFornecedor = async (req, res) => {
        try {
            const id = req.params.id;
            await fornecedor.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Fornecedor atualizado com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar fornecedor.", erro: erro.message});
        }
    };

    static deletarFornecedor = async (req, res) => {
        try {
            const id = req.params.id;
            await fornecedor.findByIdAndDelete(id);
            res.status(200).send({message: "Fornecedor deletado com sucesso."})
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar fornecedor.", erro: erro.message});
        }
    };
}

export default FornecedorController;