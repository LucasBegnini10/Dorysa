const api = require("./category_routes")
const productsController = require("../../controller/product_controller")

api.get("/product", productsController.get)

api.get("/product/idcategory/:id", productsController.getForCategory)


module.exports = api
