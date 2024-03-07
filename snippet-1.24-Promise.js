// Creating a promise to read a file
const fs = require('fs').promises;

fs.readFile('example.txt', 'utf8')
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error('Error reading file:', err);
    });