const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrls = require('./routes/api/Users')
const cors = require('cors')
const bodyParser = require("body-parser");
const passport = require("passport");

dotenv.config()

app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
app.use(bodyParser.json());

mongoose.connect(process.env.DATABASE_ACCESS, ()=> console.log("Database Connected"))

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./passport")(passport);

app.use(express.json())
app.use(cors())
app.use('/app',routesUrls)
app.listen(4000, () => console.log("Server is running"))