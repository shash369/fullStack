const express=require("express");
const app=express();
const port=4000;
let todo=[];
const sum={
    "x":"shayam",
    "y":"ram",
    "z":"maha kaal"
}
app.get('/',(req,res)=>{
    res.status(369).json(todo );
})
app.put('/edit/:som',(req,res)=>{
  todo.push(sum);
  todo.push(req.params.som)
  res.json(todo);
})
app.listen(port,()=>{
    console.log("server at port 4000");
} ) 