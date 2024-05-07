import mongoose from "mongoose";

const fonecedorSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String},
    documento: {type: Number},
    telefone: {type: Number},
    email: {type: String},
    endereco: {type: mongoose.Schema.Types.ObjectId, ref: "enderecos"}
}, {versionKey: false});

const fornecedor = mongoose.model("fornecedores", fonecedorSchema);

export default fornecedor;