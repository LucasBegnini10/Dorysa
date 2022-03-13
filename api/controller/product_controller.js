const productRepository = require("../repository/product_repository")

module.exports = {
    async get(req, res){
        productRepository.get()
        const result = await productRepository.get()
        res.send(result)
    }
}