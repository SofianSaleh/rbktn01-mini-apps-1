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
  street:  String,
  city:  String,
  state:  String,
  zipCode:  String,
  phone: String,
  cardNumber:  Number,
  expiration:  Date,
  cvv:  Number,
  Billing_address:  String
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
