// Using async/await to read a file
const fs = require('fs').promises;

async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}

readFile();
