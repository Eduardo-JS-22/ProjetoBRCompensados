import mongoose from "mongoose";

const addressSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    street: {type: String},
    number: {type: String},
    neighborhood: {type: String},
    city: {type: String},
    state: {type: String},
    zip: {type: Number}
}, {versionKey: false});

const address = mongoose.model("addresses", addressSchema);

export default address;