const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json());
const PORT = 5100;
const JWT_PASS = "123456789";
const ALL_USERS = [
    {
        name: "RAM",
        pass: "123"
    },
    {
        name: "SHYAM",
        pass: "1234"
    },
    {
        name: "SHIV",
        pass: "12345"
    }
]

function userExists(username, password) {
    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (username == ALL_USERS[i].name && password == ALL_USERS[i].pass) {
            userExists = true;
            break;
        }
    }
    return userExists;
}

app.get('/signin', (req, res) => {
    const token = req.headers.authorization;
    try {
        const verify = jwt.verify(token, JWT_PASS); 
        res.json({
           users:ALL_USERS.filter((data)=>{
            if(data.name==verify.username){
                return false;
            }
            else{
                return true;
            }
           })
        });
    } catch (err) {
        res.json({
            msg: "something went wrong",
            error: err.message  
        });
    }
});

app.post("/valid", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    if (!userExists(username, password)) {
        res.json({
            msg: "user not found"  
        });
    } else {
        const token = jwt.sign({ username: username, pass: password }, JWT_PASS);
        res.json({
            "your token is": token 
        });
    }
});

app.listen(PORT, () => {
    console.log("server is at port :" + PORT);
});
