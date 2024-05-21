const fs = require('fs');
const path = require('path');

// Specify the file path
const filePath = 'a.txt';

// Get the absolute path of the file
const absolutePath = path.resolve(filePath);

// Check if the file exists
fs.access(absolutePath, fs.constants.F_OK, (err) => {
    if (err) {
        console.error('File does not exist');
    } else {
        console.log('File path:', absolutePath);
    }
});
