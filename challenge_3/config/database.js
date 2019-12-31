var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost:27017/checkout",
  { useNewUrlParser: true, useUnifiedTopology: true }
);
var db = mongoose.connection;

db.once("open", () =>
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
);


var User = new mongoose.Schema({
  Name:  String,
  Email:  String,
  Password:  String,
  Line_1:  String,
  Line_2:  String,
  City:  String,
  state:  String,
  ZipCode:  String,
  Phone_number: String,
  expiry_date:  Date,
  cvv:  Number,
  billing_address:  String
  // Name: String,
  // Email: String,
  // Password: Number,
  // Line1: String,
  // City: String,
  // State: String,
  // CreditCard: Number,
  // ExpireDate: Date,
  // Cvv: Number,
  // BillingZip: Number
});

var user = mongoose.model('User', User, 'checkout');
module.exports = user; 
