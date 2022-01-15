const express = require('express');
const bodyParser = require('body-parser');
const home = require('./home');
const axios = require('axios');
const app = express();
const PORT = 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/home', (req, res) => {
    res.send(home);
})

app.post('/home', (req, res) => {
    console.log('connected');
    const textarea = req.body
    res.send(textarea);
    home.push(textarea);
});

app.listen(PORT, ()=> console.log(`Server running on port: http://localhost: ${PORT}`));