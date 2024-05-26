const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 4000;
app.use(bodyParser.json())
const user = [{
    name: "jhon",
    kidney: [{
        healthy: true
    }]
}];

app.get('/', (req, res) => {
    let kidneys = user[0].kidney;
    let numberOfHealthy = 0;

    for (let i = 0; i < kidneys.length; i++) {
        if (kidneys[i].healthy) {
            numberOfHealthy++;
        }
    }
    let numberOfKidneys = kidneys.length;
    let numberOfUnhealthy = numberOfKidneys - numberOfHealthy;
    let allHealthy = numberOfHealthy === numberOfKidneys;//return true in the case of true

    res.json({ numberOfKidneys, allHealthy, numberOfHealthy, numberOfUnhealthy });
});

app.post("/", (req, res) => {
    // Handle POST request
    const isHealthy = req.body.ishealthy; // Assuming your request body has an "ishealthy" field
    
        user[0].kidney.push({
            healthy:isHealthy
        })
    
   res.send("done");
});

app.put("/", (req, res) => {
    // Handle PUT request
});

app.delete("/", (req, res) => {
    // Handle DELETE request
});

app.listen(port, () => {
    console.log("connected");
});
