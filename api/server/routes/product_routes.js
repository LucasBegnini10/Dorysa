const api = require("./category_routes")
const productsController = require("../../controller/product_controller")

api.get("/product", productsController.get)


module.exports = api
