import express from "express";
import FinanceiroController from "../controllers/financeiroController.js";

const router = express.Router();

router
    .get("/financeiro", FinanceiroController.listarFinanceiro)
    .get("/financeiro/vendas", FinanceiroController.listarVendas)
    .get("/financeiro/compras", FinanceiroController.listarCompras)
    .get("/financeiro/despesas", FinanceiroController.listarDespesas)

export default router;