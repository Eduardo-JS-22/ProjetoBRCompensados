import address from "../models/address.js";

class AddressController {
    static listAddress = async (req, res) => {
        try {
            const findAddress = address.find();
            res.status(200).json(findAddress);
        } catch (error) {
            res.status(500).send(`Erro em buscar endereços: ${error}`);
        }
    }
}

export default AddressController;