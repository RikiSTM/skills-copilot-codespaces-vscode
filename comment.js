//create web server

// 1. import express module
const express = require('express');

// 2. create an express application
const app = express();

// 3. create a server object
app.listen(3000, () => {
  console.log('Server is running at http://localhost:3000');
});

// 4. define a route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// 5. define another route
app.get('/contact', (req, res) => {
  res.send('Contact us at contact@example.com');
});