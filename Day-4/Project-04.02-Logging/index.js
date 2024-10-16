const express = require('express');
const fs = require('fs');
const path = require('path');
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => {
      return `${timestamp} [${level.toUpperCase()}]: ${message}`;
    })
  ),
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'logs/app.log' })
  ]
});

const app = express();

// Handle GET requests to /message/:msg
app.get('/message/:msg', (req, res) => {
  const { msg } = req.params;
  if (!msg) {
    logger.warn('No message provided');
    return res.status(400).send('No message provided');
  }

  // Specify the path and filename
  const filePath = path.join(__dirname, 'message.txt');

  // Append the message to the file, followed by a newline character
  fs.appendFile(filePath, msg + '\n', (err) => {
    if (err) {
      logger.error(`Failed to append message: ${err}`);      
      return res.status(500).send('Failed to append message');
    }
    logger.info(`Message "${msg}" appended to file successfully`);
    
    // Send a response to the client
    res.send(`Message received and appended to file: ${msg}`);
  });
});

const PORT = process.env.PORT || 3000;
// Start the server
app.listen(PORT, () => {
  logger.info(`Microservice running on port ${PORT}`);
});
