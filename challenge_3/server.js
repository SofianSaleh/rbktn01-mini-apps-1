const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 1000;
require("./config/database");
var app = express()
 
app.listen(port, () => {
    console.log("I'm listening at 1000")
})
var jsonParser = bodyParser.json()
app.use(express.static('public'))
app.use(bodyParser.json())
var urlencodedParser = bodyParser.urlencoded({ extended: false })


 