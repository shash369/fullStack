const express = require("express");
const app = express();
const port = 4200;
app.get("/health", (req, res) => {
    const kidneyid = req.query.kidneyid;
    const username = req.headers.username;
    const password = req.headers.password;

    if (username != "sam" || password != "pass") {
        res.status(401).json({
            msg: "Unauthorized: Wrong username or password"
        });
        return;
    }
    if ((kidneyid !== "1" && kidneyid !== "2")) {
        res.status(400).json({
            msg: "Bad Request: Invalid input"
        });
        return;
    }
    res.status(200).json({
        msg: "Success"
    });
});
app.listen(port, () => {
    console.log("Server connected at port " + port);
});
