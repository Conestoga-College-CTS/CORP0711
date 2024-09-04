-- init.sql
CREATE TABLE IF NOT EXISTS messages (
  id SERIAL PRIMARY KEY,
  timestamp TIMESTAMP NOT NULL,
  text TEXT NOT NULL
);