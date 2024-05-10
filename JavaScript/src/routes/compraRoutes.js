import express from "express";
import CompraController from "../controllers/compraController.js";

const router = express.Router();

router
    .get("/compras", CompraController.listarCompras)
    .get("/compras/:id", CompraController.buscarCompra)
    .post("/compras", CompraController.cadastrarCompra)
    .put("/compras/:id", CompraController.atualizarCompra)
    .delete("/compras/:id", CompraController.deletarCompra)

export default router;