const express = require('express')
const bodyParser = require('body-parser')
const apps = require('./client/app.js')
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


var dataArr = []
app.post('/upload_json', urlencodedParser, function (req, res) {
  data = JSON.parse(req.body.JSON);

  var dataToArray = (data1) => {
    var varsData = (element) => {

      var elem = {}

      for (var key in element) {
        if (key !== 'children') {
          elem[key] = element[key]
        }

      }
      dataArr.push(elem)
      console.log(element)
      for (let i = 0; i < element['children'].length; i++) {
        varsData(element['children'][i])
      }
    }
    varsData(data1)
  }
  dataToArray(data)
  console.log(dataArr);
  res.sendStatus(200)
})

app.get("/upload_json", (req, res) => {
  var str = '';
  for (let j = 0; j < dataArr.length; j++) {
    var str1 = '';
    for (var key in dataArr[i]) {
      str1 += dataArr[i][key] + ','
    }
    str += str1.slice(0, 1) + '\n'
  }
  fs.writeFile("samples/test.txt", "hello", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 
  res.send(str)
})


