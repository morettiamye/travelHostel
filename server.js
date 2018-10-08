require("dotenv").config();

// Dependencies 
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const path = require('path');

app.use(express.static(path.join(__dirname,"/public")));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
