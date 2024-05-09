import express from "express";
import cliente from "./clienteRoutes.js";
import endereco from "./enderecoRoutes.js";
import fornecedor from "./fornecedorRoutes.js";
import produto from "./produtoRoutes.js";
import venda from "./vendaRoutes.js";
import compra from "./compraRoutes.js";
import despesa from "./despesaRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Conectado no Projeto BR Compensados."})
    });
    app.use(express.json(), cliente, endereco, fornecedor, produto, venda, compra, despesa);
}

export default routes;