const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpassword="123456789";
const app=express();
app.use(express.json());

const ALL_USERS=[
    {
        username:"RAM@GMAIL.COM",
        password:"123",
        name:"RAM"
    },
    {
        username:"SHIV@GMAIL.COM",
        password:"1234",
        name:"SHIV"
    },
    {
        username:"SHYAM@GMAIL.COM",
        password:"12345",
        name:"SHYAM"
    }
]

function userExists(username,password){
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username&&ALL_USERS[i].password==password){
            userExists=true;
            break;
        }
    }
    return userExists;
}

app.post('/signin',(req,res)=>{
  const username=req.body.username;
  const password=req.body.password;
  if(!userExists(username,password)){
     res.status(404).json({
        msg:"user does not exists"
    })
  }
  const token=jwt.sign({username:username,pass:password},jwtpassword);//token
   res.json({           //creating using this feilds
    token
  })
})

app.get('/users',(req,res)=>{
   const token=req.headers.authorization;
   try{
    const decoder=jwt.verify(token,jwtpassword);
    const dUsername=decoder.username;
    //sending  all user data
    res.json({
        users:ALL_USERS.filter((user)=>{
            if(user.username==dUsername){
                return false;
            }
            else{
                return true;
            }
        })
    })
   }catch(err){
     res.json({
        msg:"Invalid jwt token"
     })
   }
});


app.listen(4200,()=>{
    console.log("port is connected at "+4200);
})