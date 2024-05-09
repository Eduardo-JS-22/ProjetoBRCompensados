import express from "express";
import DespesaController from "../controllers/despesaController.js";

const router = express.Router();

router
    .get("/despesas", DespesaController.listarDespesas)
    .get("/despesas/:id", DespesaController.buscarDespesas)

export default router;