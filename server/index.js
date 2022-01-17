const express = require('express');
const bodyParser = require('body-parser');
const home = require('./home');
const app = express();
const PORT = 8080;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true}))

app.get('/home', (req, res) => {
    res.send(home);
})

app.post('/home', (req, res) => {
    console.log('connected');
    res.header('Content-Type', 'application/json');
    let textarea = JSON.stringify(req.body.textarea)
    home.push(`StatusDetails: ${textarea}`);
    console.log(textarea)
    res.send(textarea);
});

app.listen(PORT, ()=> console.log(`Server running on port: http://localhost: ${PORT}`));
