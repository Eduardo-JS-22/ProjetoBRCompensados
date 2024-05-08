import express from "express";
import CompraController from "../controllers/compraController.js";

const router = express.Router();

router
    .get("/compras", CompraController.listarCompras)
    .get("/compras/:id", CompraController.buscarCompra)

export default router;