import mongoose from "mongoose";

const vendaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    cliente: {type: mongoose.Schema.Types.ObjectId, ref: "clientes"},
    endereco: {type: mongoose.Schema.Types.ObjectId, ref: "enderecos"},
    produtos: {type: mongoose.Schema.Types.Array, ref: "produtos"},
    quantidades: {type: mongoose.Schema.Types.Array},
    forma_pagamento: {type: String},
    valor: {type: Number} 
}, {versionKey: false});

const venda = mongoose.model("vendas", vendaSchema);

export default venda;