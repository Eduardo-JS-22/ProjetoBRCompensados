import endereco from "../models/endereco.js";

class EnderecoController {
    static listarEnderecos = async (req, res) => {
        try {
            const listaEnderecos = await endereco.find({});
            res.status(200).json(listaEnderecos);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar endereços.", erro: erro.message});
        }
    };

    static buscaEndereco = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await endereco.findById(id);
            res.status(200).json(resultadoBusca);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao buscar endereço." , erro: erro});
        }
    };

    static cadastrarEndereco = async (req, res) => {
        try {
            const novoEndereco = await endereco.create(req.body);
            res.status(500).json({mensagem: "Endereco criado com sucesso.", endereco: novoEndereco});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar endereco.", erro: erro.message});
        }
    };

    static atualizarEndereco = async (req, res) => {
        try {
            const id = req.params.id;
            await endereco.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Endereco atualizado com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar endereco.", erro: erro.message});
        }
    };

    static deletarEndereco = async (req, res) => {
        try {
            const id = req.params.id;
            await endereco.findByIdAndDelete(id);
            res.status(200).send({message: "Endereco deletado com sucesso."})
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar endereco.", erro: erro.message});
        }
    };
}

export default EnderecoController;