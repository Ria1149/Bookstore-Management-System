const express = require('express')
const app = express();
const router = express.Router();
const bookmodel = require('../models/bookModels')
const bookcontroller = require('../controller/bookController')

app.use(express.json())

app.use('/add',bookcontroller.add);

app.use('/getbooks',bookcontroller.getbooks);

app.use('/getbookbyname',bookcontroller.getbookbyname);

app.use('/updatebook',bookcontroller.updatebook);

app.use('/deletebook',bookcontroller.deletebook);

app.use("", router)
module.exports = app;
