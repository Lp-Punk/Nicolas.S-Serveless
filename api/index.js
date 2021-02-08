const express       = require("express");
const router        = require('./routes');
const mongoose      = require("mongoose");
const bodyParser    = require("body-parser")
const app           = express();


mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json())
app.use('/', router())



module.exports = app;
