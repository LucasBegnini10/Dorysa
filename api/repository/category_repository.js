const db = require("../infra/sql_client")

module.exports = {

    async get(){
        try{
            const result =  await db.querySql("select * from categoria")
            console.log(result)
            
        }
        catch (error){
            console.log("ERROR: getCategory", error)
        }
    },

    async post(name){
        try{
            await db.querySql(`insert into categoria values (default, '${name}')`)
        }
        catch (error){
            console.log("ERROR: postCategory", error)
        }
    },

    async put(name, id){
        try{
            await db.querySql(`UPDATE categoria set nome = '${name}' WHERE (idCategoria = '${id}')`)
        }
        catch (error){
            console.log("ERROR: putCategory", error)
        }
    },

    async delete(id){
        try{
            await db.querySql(`delete from categoria where idCategoria = ${id}`)
        }
        catch (error){
            console.log("ERROR: deleteCategory", error)
        }
    }
}