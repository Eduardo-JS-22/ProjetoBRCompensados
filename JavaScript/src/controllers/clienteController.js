import cliente from "../models/cliente.js"

class ClienteController {
    static listarClientes = async (req, res) => {
        try {
            const listaClientes = await cliente.find({}).populate("endereco").exec();
            res.status(200).json(listaClientes);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar clientes.", erro: erro.message});
        }
    };

    static buscarCliente = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await cliente.findById(id).populate("endereco").exec();
            res.status(200).json(resultadoBusca)
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar clientes por id.", erro: erro.message});
        }
    };

    static cadastrarCliente = async (req, res) => {
        try {
            const novoCliente = await cliente.create(req.body);
            res.status(500).json({mensagem: "Cliente criado com sucesso.", cliente: novoCliente});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar cliente.", erro: erro.message});
        }
    };

    static atualizarCliente = async (req, res) => {
        try {
            const id = req.params.id;
            await cliente.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Cliente atualizado com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar cliente.", erro: erro.message});
        }
    };

    static deletarCliente = async (req, res) => {
        try {
            const id = req.params.id;
            await cliente.findByIdAndDelete(id);
            res.status(200).send({message: "Cliente deletado com sucesso."})
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar cliente.", erro: erro.message});
        }
    };
}

export default ClienteController;