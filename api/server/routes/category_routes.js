const api = require("../routes/route")
const categoryController = require("../../controller/category_controller")


api.delete("/category/:id", categoryController.delete)

api.put("/category", categoryController.put)

api.post("/category", categoryController.post)

api.get("/category", categoryController.get)


module.exports = api



    