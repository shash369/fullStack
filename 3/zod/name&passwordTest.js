const express=require('express');
const zod=require('zod')
const app =express();
const port =4000;
app.use(express.json())

const schema=zod.object({
    email:zod.string().email(),
    password:zod.string().min(8)
})
function validityChecker(req,res,next){
       const input=schema.safeParse({
        email:req.body.email,
        password:req.body.password
       })
       if(input.success){
        next()
       }
       else{  
        res.send("something is wrong with the inputs")
       }
}

app.post('/login',validityChecker,(req,res)=>{
    res.send("welcome to our website");
})

app.listen(port,()=>{
    console.log("connected to port :"+port);
})