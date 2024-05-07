import mongoose from "mongoose";

const enderecoSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    rua: {type: String},
    numero: {type: String},
    bairro: {type: String},
    cidade: {type: String},
    estato: {type: String},
    cep: {type: Number}    
}, {versionKey: false});

const endereco = mongoose.model("enderecos", enderecoSchema);

export default endereco;