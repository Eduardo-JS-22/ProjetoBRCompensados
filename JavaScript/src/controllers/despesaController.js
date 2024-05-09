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
}

export default DespesaController;