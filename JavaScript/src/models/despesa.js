import mongoose from "mongoose";

const despesaSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String},
    descricao: {type: String},
    valor: {type: Number}
}, {versionKey: false});

const despesa = mongoose.model("despesas", despesaSchema);

export default despesa;