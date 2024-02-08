const MESSAGE = require ("../Model/message")

// create message
const createMessage = async (req,res) =>{
    // const {from,subject,writeMessage} = req.body

    // if (!from || !subject || !writeMessage ) {
    //     res.status(300).json({success:false,message:"all fields are require to register"})
    //     return
    // }
    try {
       await MESSAGE.create(req.body)
        res.status(201).json({success:true,message:"Message Sent"})
    } catch (error) {
        res.status(400).json({success:false, error})
        console.log(error);
    }
}

const getMessages = async (req,res)=>{
    try {
        const message = await MESSAGE.find()
        res.status(200).json({success:true,message})
    } catch (error) {
        res.status(400).json({success:false})
        console.log(error);
    }
}

const deleteMessage = async (req,res)=>{
    try{
        const {id:userId} = req.params
        await MESSAGE.findOneAndDelete({_id:userId})
        res.status(200).json({message:"deleted"})

    }catch(error){
        console.log(error);
        res.status(400).json({message:error})
    }
}




module.exports ={
    createMessage,
    getMessages,
    deleteMessage
}