const mysql = require('mysql');
require('dotenv').config()

const con = mysql.createConnection({
    host: process.env.DB_HOST, 
    user: process.env.DB_USER, 
    password: process.env.DB_PASSWORD, 
    database: process.env.DB_DATABASE
});

    function connectSql(){
        return new Promise(
            function connectClient(resolve, reject){
                con.connect((err) =>{
                    if(!err){
                        return resolve(
                            'OK'
                        )
                    }
                    else{
                        return reject(
                            err
                        )
                    }
                })
            }
        )
    }

    function querySql(sql){
        return new Promise(
            function(resolve, reject){
                con.query(sql, (err, result) =>{
                    if(!err){
                        return resolve(
                            result
                        )
                    }
                    else{
                        return reject(
                            err
                        )
                    }
                })
            }
        )
    }

    module.exports = {
        connectSql, 
        querySql
    }
    