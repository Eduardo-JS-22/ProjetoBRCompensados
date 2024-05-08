import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    comprimento: {type: Number},
    largura: {type: Number},
    espessura: {type: Number},
    tipo_cola: {type: String},
    quantidade: {type: Number},
    preco_compra: {type: Number},
    preco_venda: {type: Number}
}, {versionKey: false});

const produto = mongoose.model("produtos", produtoSchema);

export default produto;