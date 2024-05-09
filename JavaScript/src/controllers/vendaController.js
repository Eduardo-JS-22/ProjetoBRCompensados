import express from "express";
import venda from "../models/venda.js";
import VendaBusiness from "../business/vendaBusiness.js";

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
    };

    static cadastrarVenda = async (req, res) => {
        try {
            const produtos = req.body.produtos;
            const quantidades = req.body.quantidades;
            req.body.valor = await VendaBusiness.retornaValorTotalVenda(produtos, quantidades);
            const novaVenda = await venda.create(req.body);
            res.status(200).json({mensagem: "Venda cadastrada com sucesso.", venda: novaVenda});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao cadastrar venda.", erro: erro.message});
        }
    };

    static atualizarVenda = async (req, res) => {
        try {
            const id = req.params.id;
            const produtos = req.body.produtos;
            const quantidades = req.body.quantidades;
            req.body.valor = await VendaBusiness.retornaValorTotalVenda(produtos, quantidades);
            await venda.findByIdAndUpdate(id, req.body);
            res.status(200).json({mensagem: "Venda atualizada com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao atualizar venda.", erro: erro.message});
        }
    };

    static deletarVenda = async (req, res) => {
        try {
            const id = req.params.id;
            await venda.findByIdAndDelete(id);
            res.status(200).json({mensagem: "Venda deletada com sucesso."});
        } catch (erro) {
            res.status(500).json({mensagem: "Erro ao deletar venda.", erro: erro.message});
        }
    };
}

export default VendaController;