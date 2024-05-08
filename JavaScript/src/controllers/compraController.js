import express from "express";
import compra from "../models/compra.js";

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
    }
}

export default CompraController;