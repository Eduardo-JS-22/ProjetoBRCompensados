import despesa from "../models/despesa.js";

class DespesaController {
    static listarDespesas = async (req, res) => {
        try {
            const listaDespesas = await despesa.find({});
            res.status(200).json(listaDespesas);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar despesas.", erro: erro.message});
        }
    };

    static buscarDespesas = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await despesa.findById(id);
            res.status(200).json(resultadoBusca);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao buscar despesas.", erro: erro.message});
        }
    }

    static cadastrarDespesas = async (req, res) => {
        try {
            const novaDespesa = await despesa.create(req.body);
            res.status(500).json({mensagem: "Despesa criado com sucesso.", despesa: novaDespesa});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar despesa.", erro: erro.message});
        }
    };

    static atualizarDespesas = async (req, res) => {
        try {
            const id = req.params.id;
            await despesa.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Despesa atualizado com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar despesa.", erro: erro.message});
        }
    };

    static deletarDespesas = async (req, res) => {
        try {
            const id = req.params.id;
            await despesa.findByIdAndDelete(id);
            res.status(200).send({message: "Despesa deletado com sucesso."})
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar despesa.", erro: erro.message});
        }
    };
}

export default DespesaController;