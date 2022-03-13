const db = require("../infra/sql_client")

module.exports = {
    async get(){
        try{
            const result = await db.querySql("select * from produto")
            const ResultInString = (JSON.stringify(result))
            const ResultInJson = JSON.parse(ResultInString)
            return ResultInJson
        }
        catch(error){
            console.log(error)
        }
    }
}