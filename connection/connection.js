const mongoose = require('mongoose')
const config = require('config')
const uri = config.get('DB_STRING')

exports.connectTodB = () =>{
    mongoose.connect(uri , { 
        useNewUrlParser: true, 
        useUnifiedTopology: true })
    
    .then(() => console.log("hogaya haa"))

    .catch((() => console.log("nope nada")))
            
}
