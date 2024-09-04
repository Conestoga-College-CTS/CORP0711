// File: app.js
import multiply from './calculator.js';

console.log(multiply(4, 5)); // Output: 20


//const express = require('express');
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  console.log(`Received request from ${req.ip} for ${req.path}`);
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});