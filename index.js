const express = require('express');


const app = express();
app.use(express.json());

const data = [];
app.get('/', (req, res) => {
    res.status(200).send('Welcome');
    return;
})
app.get('/hello', (req, res) => {
    res.status(200).send('hello');
    return;
})
app.get('/data', async (req, res) => {
    res.status(200).send(data);
    return;
})
app.post('/data', (req, res) => {
    let dataBody = req.body;
    data.push(dataBody)
    res.status(201).send(data);
    return;
})
app.listen({ port: 8080 }, () => {
    console.log('Server is running...')
})