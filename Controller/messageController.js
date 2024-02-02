const MESSAGE = require ("../Model/message")

// create message

const createMessage = async (req,res) =>{
    try {
        const message = await MESSAGE.create({...req.body})
        res.status(201).json({success:true,message:"Message Sent",message})
    } catch (error) {
        res.status(400).json({success:false, error})
        console.log(error);
    }
}

const getMessages = async (req,res)=>{
    try {
        const message = await MESSAGE.find()
        res.status(200).json({message})
    } catch (error) {
        res.status(400).json({success:false,error})
        console.log(error);
    }
}




module.exports ={
    createMessage,
    getMessages
}