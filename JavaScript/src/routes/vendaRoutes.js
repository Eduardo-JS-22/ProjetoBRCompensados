import express from "express";
import VendaController from "../controllers/vendaController.js";

const router = express.Router();

router
    .get("/vendas", VendaController.listarVendas)
    .get("/vendas/:id", VendaController.buscarVenda)

export default router;