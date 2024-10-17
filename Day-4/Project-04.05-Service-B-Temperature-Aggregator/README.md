# Temperature Average Calculation Microservice

This Node.js microservice accepts temperature data for a device via a POST request and calculates the average temperature. It uses the express framework to handle HTTP requests and is designed to run on port 3000 by default.

## Prerequisites

- Node.js installed on your machine.

## How to Run


1. Install the required dependencies by running:
    ```bash
    npm install
    ```
2. Start the microservice:
    ```bash
    node index.js
    ```

    or 

    ```bash
    npm start
    ```

The microservice will now be running on http://localhost:3000.

## API Usage

This service accepts temperature data for a device through a POST request to the /calculate-average endpoint.

```HTTP
POST /calculate-average
Request Body:
device_id: A unique identifier for the device.
temperatures: An array of temperature values to calculate the average.
```

Example Request Body:
```json
{
  "device_id": "123",
  "temperatures": [23.5, 24.0, 22.8]
}
```

Response:
The response will include the device_id and the calculated average temperature.

Example Response:
```json
{
  "device_id": "123",
  "average": 23.43
}
```