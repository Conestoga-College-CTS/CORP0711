// Import 'fs' from Node.js and use the 'promises' API to work asynchronously
const fs = require('fs').promises; 

// Define the path to the CSV file. Make sure the file exists at this location.
const path = './data.csv';  

// Function to read the CSV file
async function readFile(filepath) {
  try {
    // Read the file's content asynchronously with UTF-8 encoding
    const data = await fs.readFile(filepath, 'utf8');
    return data; // Return the file's content
  } catch (err) {
    // Handle any errors that occur during file reading
    console.error('Error reading file:', err);
  }
}

// Main function to scrape and parse CSV data
async function main() {
  // Step 1: Read the entire CSV file into a string
  const data = await readFile(path);

  // Step 2: Split the string by newlines to break it into rows
  const lines = data.split('\n');

  // Step 3: Split the first line (header row) by commas and trim spaces
  const headers = lines[0].split(',').map(header => header.trim());

  // Create an empty array to store the parsed data
  const results = [];

  // Step 4: Loop through the remaining rows (skipping the header)
  for (let i = 1; i < lines.length; i++) {
    // Ignore empty lines
    if (!lines[i].trim()) continue;

    // Split the row by commas and trim each value
    const values = lines[i].split(',').map(value => value.trim());

    // Create an object to hold the current row's data
    const sensorData = {};
    
    // Match each value with its corresponding header
    headers.forEach((header, index) => {
      sensorData[header] = values[index]; // Assign each value to the header as a key
    });

    // Add the parsed row (as an object) to the results array
    results.push(sensorData);
  }

  // Step 5: Log the parsed data to the console
  console.log('Scraped CSV Data:', results);
}

// Step 6: Run the main function
main();
