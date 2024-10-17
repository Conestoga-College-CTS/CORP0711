// Import the 'express' framework for building the server
const express = require('express');

// Create an Express application instance
const app = express();

// Use express.json() to parse incoming JSON payloads
app.use(express.json());

// Main function to handle all setup and routing
function main() {
  // Route to handle POST requests at /calculate-average
  app.post('/calculate-average', (req, res) => {
    // Destructure 'device_id' and 'temperatures' from the request body
    const { device_id, temperatures } = req.body;
    
    console.log(`Received temperature data for device id: ${device_id}, calculating average`);

    // Validate if temperatures are provided
    if (!temperatures || temperatures.length === 0) {
      // Return a 400 status if no temperatures are found
      return res.status(400).send({ error: 'No temperatures provided' });
    }

    // Calculate the average of the temperature array
    const total = temperatures.reduce((sum, temp) => sum + temp, 0);
    const average = total / temperatures.length;
    
    // Log the calculated average temperature
    console.log(`Average temperature: ${average}, sending to Service-A\n`);
    
    // Send the response with the device_id and calculated average
    res.send({ device_id, average });
  });

  // Define the port number where the service will listen for requests
  const PORT = 3000;

  // Start the server and listen on the defined port
  app.listen(PORT, () => {
    console.log(`Microservice running on port ${PORT}`);
  });
}

// Call the main function to start the microservice
main();
