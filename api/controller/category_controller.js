const categoryRepository = require("../repository/category_repository")

module.exports = {

    async get(req, res){
        categoryRepository.get()
        const result = await categoryRepository.get()
        res.send(result)
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

