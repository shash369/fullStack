//same logic usin middleware
const express=require("express");
const app=express();
const port=4200;

function namePassChecker(req,res,next){
    if (req.headers.username!="sam"&&req.headers.pass!="pass") {
        res.json({
            msg:"wrong name or pass"
        })
    }
    else{
        next();
    }
}
function paramsChecker(req,res,next){
    if(req.query.kidneyid!=1&&req.query.kidneyid!=2){
        res.json({
            msg:"wrong params"
        }) 
    }else{
        next();
    }
}
//we can also use app.use(paramsChecker) it will attached to every route after that

app.get('/health',namePassChecker,paramsChecker,(req,res)=>{
    res.json({
        msg:"your kidney is healthy"
    })
});

app.listen(port,()=>{
    console.log("connedcted at port : "+port);
})