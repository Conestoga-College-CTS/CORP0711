# CSV Scraper Microservice

This Node.js microservice reads a CSV file, parses its content, and sends data to a local average calculation service via HTTP POST requests using the axios library. The parsed data consists of device temperatures, which are grouped by device ID and sent to the average service for further processing.

## Prerequisites

- Node.js installed on your machine.
- A CSV file named data.csv in the project directory.
- A local average calculation service running at http://localhost:3000/calculate-average.

## How to Run

1. Install the necessary dependencies:
    ```bash
    npm install
    ```
2. Run the microservice:
    ```bash
    node index.js
    ```

    or 

    ```bash
    npm start
    ```

The parsed data will be sent to the average service, and the calculated average for each device will be displayed in the terminal.