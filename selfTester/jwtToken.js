const express=require('express');
const jwt=require('jsonwebtoken');

const app=express();
app.use(express.json());

const port=3333;
const JWT_PASS="ThisIsA_String"

const ALL_USERS=[
    {
        name:"ram",
        password:"123456"
    },
    {
        name:"guru",
        password:"123"
    },
    {
        name:"once",
        password:"1234"
    }
]
function userExists(name,password){
    let user=false;
    for (let i = 0; i < ALL_USERS.length; i++) {
       if (ALL_USERS[i].name===name && ALL_USERS[i].password===password) {
        user=true;
        break;
       }
    }
    return user;
}
app.get('/',()=>{
    res.send("hello")
})
app.get('/signin',(req,res)=>{
     const name=req.body.name;
     const password=req.body.password;
     if(!userExists(name,password)) {
        res.send("this user does not exists");
     }else{
        const token=jwt.sign({username:name,password:password},JWT_PASS)
        res.json({"this user exists in the data base :":token});
     }
})

app.listen(port,()=>{
    console.log("port is connected at "+port);
})
