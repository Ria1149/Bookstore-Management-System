const express = require('express');
const book = require("../models/bookModels");

exports.add = async(req,res) => {
    try{
        const data = req.body;
        const newBook = new bookmodel(data)
        await newBook.save().then(() => {
            res.status(200).json({message: "Added!!"});
        });
    }
    catch(error){
        console.log(error)
    }
}

exports.getbooks = async(req,res) => {
    try{
        const books = await bookmodel.find();
         res.status(200).json({books});
 
     }
     catch(error){
         console.log(error)
     }
}

exports.getbookbyname = async(req,res) => {
     //const {name} = req.body
     try{
        // console.log(name)
         const book = await bookmodel.findOne({name:req.body.name});
         res.send("book = " + book);
 
     }
     catch(error){
         console.log(error)
     }
}

exports.updatebook = async(req,res) => {
    const id = ({code:req.body.code},{name:req.body.name})
    const {  name,code,author_name,publisher_name,image, website, price } = req.body;
    let book;
    try{
        book = await bookmodel.findByOneandUpdate(id,{ 
            name,
            code,
            author_name,
            publisher_name,
            image, 
            website, 
            price 
        });
        await book.save().then(()=>res.send(200).json({ message: "Data Updated"},{book}));

    }
    catch(error){
        console.log(error)
    }
}

exports.deletebook = async(req,res) => {
    try{
        await bookmodel.findOneAndDelete( {name:req.body.name})
        .then(()=>res.status(201).json({message: "Deleted"}))
    }
    catch(error){
        console.log(error)
    }
}

