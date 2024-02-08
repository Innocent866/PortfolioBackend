const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:[true,"please enter an email address"],
        unique:[true,"Email already in use"],
        lowercase:true
    },
    password:{
        type:String,
        require:true,
    },
},{timestamps:true})

const USER = mongoose.model('user',userSchema)
module.exports = USER