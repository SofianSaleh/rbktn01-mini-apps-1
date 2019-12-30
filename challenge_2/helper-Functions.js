var dataArr = []
var dataToArray = (data1) => {
  var varsData = (element) => {

    var elem = {}

    for (var key in element) {
      if (key !== 'children') {
        elem[key] = element[key]
      }

    }
    dataArr.push(elem)
    // console.log(element)
    for (let i = 0; i < element['children'].length; i++) {
      varsData(element['children'][i])
    }
  }
  varsData(data1)
  return dataArr;
}

var valuesOfObject = (array, obj) => {
  var str = '';
  for (let j = 0; j < array.length; j++) {
    var str1 = '';
    for (var key in array[j]) {
      str1 += array[j][key] + ','
    }
    str += str1.slice(0, -1) + '\n'
  }
  var values = Object.keys(obj);
  values = values.slice(0, values.length - 1).join(',')
  var string = values + "\n" + str;
  // console.log(string)
  return string
}

var queryThingy = (queryThing) => {
  var arr = queryThing.split('/')
  return arr[arr.length - 1]
}

module.exports.dataToArray = dataToArray
module.exports.valuesOfObject = valuesOfObject
module.exports.queryThingy = queryThingy