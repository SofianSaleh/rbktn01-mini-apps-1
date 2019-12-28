const express = require('express')
const bodyParser = require('body-parser')
const apps = require('./client/app.js')
const helper = require('./helper-Functions.js')
const fs = require("fs");
const port = 3000
const app = express()

app.use(express.static('client'))

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}`);
  next();
});

app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App is listening on port: ${PORT}`));
////////////////////// V A R I A B L E S ////////////////////////////////////
var dataArr = []
///////////////////////// P O S T ///////////////////////////////////
app.post('/upload_json', urlencodedParser, function (req, res) {
  data = JSON.parse(req.body.JSON);
  
  var f = helper.dataToArray(data)
  var j = helper.valuesOfObject(f, data)

    fs.writeFile("test.csv", j, function(err) {
      if(err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  });
  res.sendStatus(200)
})

////////////////////////////////////////////////////////
// app.post("/download", urlencodedParser, (req, res) => {
//   res.sendStatus(200).download(Object.values(req.body.download).join(''));
// })


