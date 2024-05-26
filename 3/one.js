const express=require("express");

const app=express();
const port= process.env.PORT||5000;

app.get("/",(req,res)=>{
   let n=req.query.n;
    res.send(n);
})
    
app.listen(port,()=>{
    console.log(`connected at ${port}`);
}) 