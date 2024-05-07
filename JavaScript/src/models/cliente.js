import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String},
    documento: {type: Number},
    telefone: {type: Number},
    email: {type: String},
    endereco: {type: mongoose.Schema.Types.ObjectId, ref: "enderecos"}
}, {versionKey: false});

const cliente = mongoose.model("clientes", clienteSchema);

export default cliente;