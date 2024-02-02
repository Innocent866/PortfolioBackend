const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    subject:{
        type:String,
        require:true,
    },
    from:{
        type:String,
        require:true,
    },
    writeMessage:{
        type:String,
        require:true,
    },
},{timestamps:true})

const MESSAGE = mongoose.model('message',messageSchema)
module.exports = MESSAGE