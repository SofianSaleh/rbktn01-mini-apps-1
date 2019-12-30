const express = require('express')
const bodyParser = require('body-parser')
const userRouter = require('./models/userSchema')
const port = process.env.PORT || 1000;
require("./config/database");
var app = express()
 
app.listen(port, () => {
    console.log("I'm listening at 1000")
})

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/userSchema', userRouter)
app.post('/user', (req, res) => {
    console.log(req.body)
})


 