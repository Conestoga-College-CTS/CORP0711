const express = require('express');

const { Pool } = require('pg'); // Import the Pool class from the pg

const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get('/message/:msg', async (req, res) => {
  const { msg } = req.params;
  if (!msg) {
    return res.status(400).send('No message provided');
  }

  try {
    const timestamp = new Date().toISOString();
    // Insert the message into the database with a timestamp
    await pool.query('INSERT INTO messages(timestamp, text) VALUES ($1, $2)', [timestamp, msg]);
    console.log(`Message "${msg}" appended to database successfully`);
    res.send(`Message received and appended to database: ${msg}`);
  } catch (err) {
    console.error('Failed to append message to database:', err);
    res.status(500).send('Failed to append message');
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Microservice running on port ${PORT}`);
});
