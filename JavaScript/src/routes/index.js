import express from "express";
import cliente from "./clienteRoutes.js";
import endereco from "./enderecoRoutes.js";
import fornecedor from "./fornecedorRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(200).send({titulo: "Conectado no Projeto BR Compensados."})
    });
    app.use(express.json(), cliente, endereco, fornecedor);
}

export default routes;