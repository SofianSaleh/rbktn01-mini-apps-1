const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  password: {type: String, required: true},
  street: {type: String, required: true},
  city: {type: String, required: true},
  state: {type: String, required: true},
  zipCode: {type: String, required: true},
  phone: String,
  cardNumber: {type: Number, required: true},
  expiration: {type: Date, required: true},
  cvv: {type: Number, required: true},
  Billing_address: {type: String, required: true}
});

module.exports = mongoose.model("User", userSchema);