import express from "express";
import ProdutoController from "../controllers/produtoController.js";

const router = express.Router();

router
    .get("/produtos", ProdutoController.listarProdutos)
    .get("/produtos/:id", ProdutoController.buscarProduto)
    .post("/produtos", ProdutoController.cadastrarProduto)
    .put("/produtos/:id", ProdutoController.atualizarProduto)
    .delete("/produtos/:id", ProdutoController.deletarProduto)

export default router;