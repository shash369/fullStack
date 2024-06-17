const express = require("express");
const app = express();
const port = 4200;

app.use(express.json()); //if you wan to use body it is importent to use 
                         // this function

app.post("/health", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send(`you have ${kidneysLength} kidneys`);
});


//global catch
//wii be called if a error is encountered
//in the server
app.use((err,req,res,next)=>{
    res.json({
        "msg":"something is wrong with the server"
    })
})

app.listen(port, () => {
    console.log("connected at port " + port);
});