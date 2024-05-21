const express=require('express')
const app=express();
const port=4000;
const user=[{
    name:"jhon",
    kidneys:[{
        healthy:true
    },{
        healthy:true
    }]
}]
app.get('/',(req,res)=>{
    let kid=user[0].kidneys;
    // let stat=user[0].kidneys[req.query.n];
    let numberOfHealthy=0;
    for (let i = 0; i < kid.length; i++) {
        if (kid[i].healthy) {
            numberOfHealthy=numberOfHealthy+1;
        }
    }
    
    let noKid=kid.length;
    let healthy=kid[0].healthy;
    let numberOfUnhealthy=noKid-healthy;
    res.json({noKid,healthy,numberOfHealthy})
})
app.post("/",(req,res)=>{

})
app.put("/",(req,res)=>{

})
app.delete("/",(req,res)=>{

})

app.listen(port,()=>{
    console.log("connected");
})
