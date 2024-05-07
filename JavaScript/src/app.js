import "dotenv/config";
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conexao = await conectaNaDatabase();
conexao.on("error", (erro) => {
    console.error("Erro de conexão: ", erro);
});
conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

export default app;