const express = require('express');
const app = express();
const mongoose=require("mongoose");
const dB = require('./connection/connection');
const bookroute = require('./routes/booksRoutes');
app.use(express.json())
dB.connectTodB()
app.get("/", (req,res) =>{
    res.send("hello")
})
app.use("/api/b1",bookroute)

app.listen(2000,() =>{
    console.log("yess T-T")
} )