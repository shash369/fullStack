//using zod for schema validation 
const express = require("express");
const zod =require("zod")
const app = express();
const port = 4200;

app.use(express.json());
const schema=zod.array(zod.number())

app.post("/arr", (req, res) => {
   const kidney = req.body.kidney;
   const respo=schema.safeParse(kidney)
    if(respo.success){
        res.send("number is: "+respo.data.length);
    }
    else{
        res.send(respo.error);
    }
});
app.listen(port, () => {
    console.log("Connected at port: " + port);
});
