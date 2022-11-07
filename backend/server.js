const express = require('express');
require('dotenv').config();

// Create express app
const app = express();

// Middleware
app.use((req, res, next) => {
    console.log(req.path, req.method)
    next();
});

// React to requests  (Routes)
app.get('/', (req, res) => {
    res.send({msg: 'Hello World!'});
});

// Listen for requests(port 5000)
app.listen(process.env.PORT, () => {
    console.log('Listening on port ', process.env.PORT);
});