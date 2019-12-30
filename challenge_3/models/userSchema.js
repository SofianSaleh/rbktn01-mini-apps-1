const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  // address: addressSchema,
  // card: cardSchema
  street: String,
  city: String,
  state: String,
  zipCode: String,
  phone: String,
  cardNumber: String,
  expiration: String,
  cvv: String,
  cardZip: String
});

module.exports = mongoose.model("User", userSchema);