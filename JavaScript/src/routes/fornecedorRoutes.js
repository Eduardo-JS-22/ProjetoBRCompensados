import express from "express";
import FornecedorController from "../controllers/fornecedorController.js";

const router = express.Router();

router
    .get("/fornecedores", FornecedorController.listarFornecedores)
    .get("/fornecedores/:id", FornecedorController.buscaFornecedor)
    .post("/fornecedores", FornecedorController.cadastrarFornecedor)
    .put("/fornecedores/:id", FornecedorController.atualizarFornecedor)
    .delete("/fornecedores/:id", FornecedorController.deletarFornecedor)

export default router;