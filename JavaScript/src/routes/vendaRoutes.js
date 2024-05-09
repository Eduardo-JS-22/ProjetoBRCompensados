import express from "express";
import VendaController from "../controllers/vendaController.js";

const router = express.Router();

router
    .get("/vendas", VendaController.listarVendas)
    .get("/vendas/:id", VendaController.buscarVenda)
    .post("/vendas", VendaController.cadastrarVenda)
    .put("/vendas/:id", VendaController.atualizarVenda)
    .delete("/vendas/:id", VendaController.deletarVenda)

export default router;