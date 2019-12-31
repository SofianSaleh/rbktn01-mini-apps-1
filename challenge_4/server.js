const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 1000;

var app = express()
 
app.listen(port, () => {
    console.log("I'm listening at 1000")
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))



