const db = require("./infra/sql_client")
const api = require("./server/routes/category_routes")


async function startApi(){
    await db.connectSql()

    api.listen(3001, () =>{
        console.log("API ligada")
    })
}



startApi();