
//appel mongoose
const mongoose = require('mongoose')
//schema du collections (id(par defau),nom,prenom) 
const contactSchema = new mongoose.Schema({
    nom:{
        type : String,
        required : true
    },
    numero : {
        type : String,
        required : true
    }
}, {timestamps : true })
// cree une collection 
module.exports = mongoose.model('Contacts', contactSchema )