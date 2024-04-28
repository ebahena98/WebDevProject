const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();

let initalPath = path.join(__dirname, "public");

app.use(bodyParser.json());
app.use(express.static(initalPath));


app.get('/', (req, res) => {
    res.sendFile(path.join(initalPath, "index.html"));
})

app.get('/login', (req,res) => {
    res.sendFile(path.join(initalPath, "login.html"));
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(initalPath, "register.html"));
})

app.listen(3000, (req, res) => {
    console.log('listening on port 3000......')
})
