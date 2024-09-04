// Read a file using the fs module in Node.js with a callback
const fs = require('fs');

fs.readFile('example.txt', 'utf8', function(err, data) {
    if (err) {
        return console.log('Error reading file:', err);
    }
    console.log(data);
});
