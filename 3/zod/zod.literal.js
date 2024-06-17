const express=require('express');
const zod=require('zod');
const app=express();
const port=4200;
const schema=zod.literal("india").or(zod.literal("canada"));
app.use(express.json())
function checkInput(req,res,next){//to check if the input even 
    if (!req.body.country) {      //exists or not 
        res.send("give your country input");
    }
    else{
        next();
    }
}
app.post('/arr',checkInput,(req,res)=>{
const inp=req.body.country;
const ans=schema.safeParse(inp);
if(ans.success){
    res.send(ans.data+" is great country");
}else{
    res.send("you dont live in a great counttry");
}
})
app.listen(port,()=>{
    console.log("connected at port: "+ port);
})