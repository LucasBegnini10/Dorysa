const api = require("../config")

api.get("/", (req, res) => {
    res.send('HI. This is my API.')
})

module.exports = api
