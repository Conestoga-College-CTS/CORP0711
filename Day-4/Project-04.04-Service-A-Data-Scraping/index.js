// Import 'fs' to work with the file system, using the 'promises' API for async operations
const fs = require('fs').promises;

// Import 'axios' to send HTTP requests
const axios = require('axios');

// Define the path to the CSV file
const path = './data.csv'; 

// Define the URL of the average calculation service
const averageServiceUrl = 'http://localhost:3000/calculate-average'; 

// Function to read the CSV file asynchronously
async function readFile(filepath) {
  try {
    // Read the file's content as a string with UTF-8 encoding
    const data = await fs.readFile(filepath, 'utf8');
    return data; // Return the file contents
  } catch (err) {
    // Log any errors that occur during file reading
    console.error('Error reading file:', err);
  }
}

// Function to introduce a delay between HTTP requests
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms)); // Use setTimeout for delay
}

// Function to scrape and parse the CSV data manually
async function main() {
  // Step 1: Read the entire CSV file into memory
  const data = await readFile(path);
  
  // Step 2: Split the file contents into rows by newline characters
  const lines = data.split('\n');

  // Step 3: Extract headers from the first row, trimming whitespace
  const headers = lines[0].split(',').map(header => header.trim());

  // Initialize an object (map) to group data by device_id
  const deviceMap = {};

  // Step 4: Loop through the rows (skipping the first one since it's the header)
  for (let i = 1; i < lines.length; i++) {
    // Skip any empty lines
    if (!lines[i].trim()) continue;

    // Split the current row into values, trimming whitespace
    const values = lines[i].split(',').map(value => value.trim());

    // Create an object to hold this row's data
    const rowData = {};
    headers.forEach((header, index) => {
      rowData[header] = values[index]; // Assign each value to its corresponding header
    });

    // Extract device_id and temperature from the current row
    const deviceId = rowData['device_id'];
    const temperature = parseFloat(rowData['temperature']); // Convert temperature to a number

    // If this device_id isn't already in the map, initialize it
    if (!deviceMap[deviceId]) {
      deviceMap[deviceId] = { device_id: deviceId, temperatures: [] };
    }

    // Add the current temperature to the device's array of temperatures
    deviceMap[deviceId].temperatures.push(temperature);
  }

  // Convert the deviceMap into an array of devices with their respective data
  const results = Object.values(deviceMap);

  // Log the parsed data in a human-readable format
  console.log('Scraped CSV Data:', results); 

  // Step 5: Send each device's data to the average calculation service
  for (const device of results) {
    try {
      // Use axios to send a POST request with the device data
      const response = await axios.post(averageServiceUrl, device);
      console.log(`Average for device ${device.device_id}:`, response.data.average);
    } catch (error) {
      // Handle any errors that occur during the HTTP request
      console.error('Error sending data to average service:', error.message);
    }
    
    // Introduce a delay of 5 seconds between each request (for demonstration purposes)
    await delay(5000); 
  }
}

// Run the main function to initiate the scraping and HTTP requests
main();