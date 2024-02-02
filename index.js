const express  = require("express");
const cors = require('cors')
const app = express()
const connect = require('./db/mongoDB')
const port = process.env.PORT || 3000
const messageRoute = require('./Route/messageRoute');
const morgan = require("morgan");

// middleware
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// api
app.use('/api',messageRoute)

// routes
app.get('/',(req,res)=>{
    res.status(200).json({message:'app is running'})
})

app.use((req,res)=>{
    res.status(404).json({message:"that route doesn't exist"})
})

connect()
.then(()=>{
    try{
        app.listen(port,(req,res)=>{
            console.log(`Server is Connected to http://localhost:${port}`);
        })
    }
    catch(error){
        console.log('can not connect to the server');
    }
})
.catch((error)=>{
    console.log("invalid database connection...!",error);
})