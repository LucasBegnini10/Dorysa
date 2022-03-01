const categoryRepository = require("../repository/category_repository")

module.exports = {

    get(req, res){
        categoryRepository.get()
    },

    post(req, res){
        const {name} = req.body
        categoryRepository.post(name) 
    },

    put(req, res){
        const {name}  = req.body
        const {id} = req.body
        categoryRepository.put(name, id)
    },

    delete(req, res){
        const {id} = req.params
        categoryRepository.delete(id)
    }
}