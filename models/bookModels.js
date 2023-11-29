const mongoose = require("mongoose");
const bookschema =new  mongoose.Schema({
    name :{type: String, required:true},
    code :{type: String, required:true},
    author_name :{type: String, required:true},
    publisher_name :{type: String, required:true},
    image :{type: String, required:true},
    website : {type: String, required:true},
    price : {type: Number, required:true}
    
});

module.exports = mongoose.model("books", bookschema);
