const bodyParser = require('body-parser');
const express= require('express');
const app=express();
const port=4000;
app.use(bodyParser.json());
let todo=[];
app.get('/',(req,res)=>{
    res.json(todo);
})
app.post('/',(req,res)=>{
   let todo1={
    id:req.body.id,
    name:req.body.name,
    todo:req.body.todo
   }
   todo.push(todo1);
   res.json(todo1);
})
app.listen(port,()=>{
    console.log("server is connected");
})