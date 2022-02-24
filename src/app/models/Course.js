const  mongoose = require('mongoose')
const Schema = mongoose.Schema

const Course= new Schema({
    name : {type: String},
    description: {type: String, maxlength: 600},
    image: {type: String, maxlength: 255},
    createAt: {type: Date, default: Date.now},
    updateAt: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Course', Course)