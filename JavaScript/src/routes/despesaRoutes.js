import express from "express";
import DespesaController from "../controllers/despesaController.js";

const router = express.Router();

router
    .get("/despesas", DespesaController.listarDespesas)
    .get("/despesas/:id", DespesaController.buscarDespesas)
    .post("/despesas", DespesaController.cadastrarDespesas)
    .put("/despesas/:id", DespesaController.atualizarDespesas)
    .delete("/despesas/:id", DespesaController.deletarDespesas)

export default router;