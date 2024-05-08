import express from "express";
import venda from "../models/venda.js";

class VendaController {
    static listarVendas = async (req, res) => {
        try {
            const listaVendas = await venda.find({}).populate(["cliente", "endereco", "produtos"]).exec();
            res.status(200).json(listaVendas);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao listar vendas.", erro: erro.message});
        }
    };

    static buscarVenda = async (req, res) => {
        try {
            const id = req.params.id;
            const resultadoBusca = await venda.findById(id).populate(["cliente", "endereco", "produtos"]).exec();
            res.status(200).json(resultadoBusca);
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao buscar venda.", erro: erro.message});
        }
    }
}

export default VendaController;