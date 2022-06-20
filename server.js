require('dotenv').config();
const express = require('express');
const app = express();

const port = process.env.PORT || 3000

app.get('/api/cicd', (req, res) => {
    res.send("<h1>Hello wiredplus!! CICD worked!!</h1>")
});

app.get('/api/env', (req, res) => {
    res.send(`ENV => ${JSON.stringify(process.env)}`)
});

app.get('/', (req, res) => {
    res.send("<h1>Hello wiredplus!! CICD worked!!</h1>")
});

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})