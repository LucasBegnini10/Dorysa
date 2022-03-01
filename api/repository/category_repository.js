const db = require("../infra/sql_client")

module.exports = {

    async get(){
        const result =  await db.querySql("select * from categoria")
        console.log(result)
    },

    async post(name){
        await db.querySql(`insert into categoria values (default, '${name}')`)
    },

    async put(name, id){
        await db.querySql(`UPDATE categoria set nome = '${name}' WHERE (idCategoria = '${id}')`)
    },

    async delete(id){
        await db.querySql(`delete from categoria where idCategoria = ${id}`)
    }
}