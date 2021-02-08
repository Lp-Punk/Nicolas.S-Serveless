const express       = require("express");
const meals        = require('./routes/meals');
const orders        = require('./routes/orders');
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser")
const app           = express();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json())
app.use('/api/meals', meals)
app.use('/api/orders', orders)


module.exports = app;
