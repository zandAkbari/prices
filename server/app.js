const express = require('express');
const app = express();
app.use(express.json());

// data
const Prices = require('./prices');

// CORS Handler Middleware
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// Routes
app.get("/", (req, res) => {
    res.status(200).send('server is up...');
})

app.get('/prices', (req, res) => {
    console.log("request handling on progress....");
    res.json(Prices);
    console.log("successfully responded...");
});



app.listen(3333, () => {
    console.log('Server Started...');
    console.log('Server is listening on port 3333...');
});
