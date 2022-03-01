const express = require("express")
const cors = require("cors")

const api = express()
api.use(cors())
api.use(express.json())


module.exports = api
