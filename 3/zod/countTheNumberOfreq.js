//WE have to cohunt the number if assignment that ar being sent by http server
//use middleware beacuse every time a route is called middleware will be called
//
const express=require("express")
const app=express();
const port=4200;
let count=0;
function toCount(req,res,next) {
    count++;
    next();
    
}
app.use(toCount)//ever req will be passed from it

app.get("/home",(req,res)=>{
  res.json({count});
})
app.get("/home2",(req,res)=>{
    res.json({count});
})
app.listen(port,()=>{
    console.log("connected");
})