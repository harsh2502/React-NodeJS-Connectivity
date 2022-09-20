const express=require('express')
const dotenv=require('dotenv')
const app=express();

//Load Config
dotenv.config({path:'./config/.env'})


app.get('/',(req,res)=>{
  res.json({'Name':'Harsh'});
})

//Start Server
const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>
{
  console.log("Server up and running")
})