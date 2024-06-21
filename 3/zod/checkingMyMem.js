const express=require("express");
const zod=require("zod");
const app=express();
const PORT=3200;
app.use(express.json());
const schema=zod.object({
    "email":zod.string().email(),
    "pass":zod.string().min(8)
})
function authCheck(req,res,next){//middelware for auth check
    const userData=schema.safeParse({
        email:req.body.email,
        pass:req.body.pass
    })
    if(!userData.success){
        res.json({"error":userData.error})
    }
    else{
        next()
    }
}
app.post("/home",authCheck,(req,res)=>{
        res.json({
            "msg":"welcome to our site new update will bbe comming soon"
        })
})
app.listen(PORT,()=>{
    console.log("port is connected at "+PORT);
})