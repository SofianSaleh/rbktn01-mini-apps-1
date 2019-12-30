var mongoose = require("mongoose");

mongoose.connect(
  "mongodb://localhost/checkout",
  { useNewUrlParser: true }
);
var db = mongoose.connection;

db.once("open", () =>
  console.log(`Connected to MongoDB on ${db.host}:${db.port}`)
);
