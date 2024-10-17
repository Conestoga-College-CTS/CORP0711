# CSV Scraper

This Node.js application reads a CSV file and  parses its contents. The parsed data is then printed to the console. 

## Prerequisites

- Node.js installed on your machine.
- A CSV file named data.csv in the project directory.

## How to Run

1. Install the necessary dependencies:

    ```bash
    npm install
    ```

2. Run the script:

    ```bash
    node index.js
    ```

The parsed CSV data will be displayed in the terminal.

## Sample CSV Format

Ensure your data.csv file follows a structure like this:

```
device_id,timestamp,temperature,humidity
device_001,2024-10-10 12:00:00,23.5,45.2
...
```