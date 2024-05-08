import mongoose from "mongoose";

const compraSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    fornecedor: {type: mongoose.Schema.Types.ObjectId, ref: "fornecedores"},
    endereco: {type: mongoose.Schema.Types.ObjectId, ref: "enderecos"},
    produtos: {type: mongoose.Schema.Types.Array, ref: "produtos"},
    quantidades: {type: mongoose.Schema.Types.Array},
    forma_pagamento: {type: String},
    valor: {type: Number}
}, {versionKey: false});

const compra = mongoose.model("compras", compraSchema);

export default compra;