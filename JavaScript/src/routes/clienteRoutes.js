import express from "express";
import ClienteController from "../controllers/clienteController.js";

const router = express.Router();

router
    .get("/clientes", ClienteController.listarClientes)
    .get("/clientes/:id", ClienteController.buscarCliente)
    .post("/clientes", ClienteController.cadastrarCliente)
    .put("/clientes/:id", ClienteController.atualizarCliente)
    .delete("/clientes/:id", ClienteController.deletarCliente)

export default router;