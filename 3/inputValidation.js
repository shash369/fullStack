const express = require("express");
const app = express();
const port = 4200;

app.use(express.json());

app.post("/health", (req, res) => {
    const kidneys = req.body.kidneys;
    const kidneysLength = kidneys.length;
    res.send(`you have ${kidneysLength} kidneys`);
});

app.listen(port, () => {
    console.log("connected at port " + port);
});