const express = require("express");
const app = express();
const path = require("path");
const mongoose = require('mongoose');
const dbConnect = require("./config");
const userData = require("./content");
const { log } = require("console");
const e = require("express");
const bcrypt = require("bcrypt");



const PORT = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// //  Data base connection
dbConnect();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });




app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
