const USER = require ('../Model/user')

// create user
const create_user = async (req,res) =>{
    const {name,email,password} = req.body

    if (!name || !email || !password ) {
        res.status(300).json({success:false,message:"all fields are require to register"})
        return
    }
    try {
        await USER.create(req.body)
        res.status(201).json({success:true,message:'Registration Successful'})
    } catch (error) {
        console.log();
    }
}

// create user
const login = async (req,res) =>{
    try {
        const user = await USER.findOne({email})
        if(!user){
            return res.status(404).json({success:false,message:"email not found"})
        }
        res.status(200).json({user})
        } catch (error) {
        console.log();
    }
}

module.exports ={
    create_user,
    login
}