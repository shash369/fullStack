const fs = require('fs');
fs.readFile("a.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err);
    } else {
        console.log(data);
    }   
    // Writing new data to the file
    fs.writeFile("a.txt", data +" really ??", (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log("File data has been changed");
        }
    });
});
