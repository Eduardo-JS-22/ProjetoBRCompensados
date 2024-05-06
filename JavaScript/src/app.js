import "dotenv/config";
import express from "express";
import conectaNaDatabase from "./config/dbConnect.js";
import address from "./models/address.js";
// import client from "./models/client.js";

const conexao = await conectaNaDatabase();

conexao.on("error", (erro) => {
    console.error("Erro de conexão: ", erro);
});

conexao.once("open", () => {
    console.log("Conexão com o banco de dados realizada com sucesso!");
});

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Conectado no Projeto BR Compensados.")
});

app.get("/address", async (req, res) => {
    try {
        const addressList = await address.find({});
        res.status(200).json(addressList);
    } catch (error) {
        console.error("Erro ao recuperar os dados do endereço:", error);
        res.status(500).json({ error: "Erro ao recuperar os dados do endereço" });
    }
});

// app.get("/client", async (req, res) => {
//     try {
//         const clientList = await client.find({});
//         res.status(200).json(clientList);
//     } catch (error) {
//         console.error("Erro ao recuperar os dados do endereço:", error);
//         res.status(500).json({ error: "Erro ao recuperar os dados do endereço" });
//     }
// });

export default app;