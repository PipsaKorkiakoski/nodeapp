const express = require('express');
const app = express();
app.use(express.json());

const { calculate } = require('./calculate')
const { prime } = require('./prime')


const {readFileSync} = require('fs')
const formPage = readFileSync('./form.html')

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.writeHead(200,{ 'content-type':'text/html' })
    res.write(formPage)
    res.end()
})

app.get('/sumandcheck', (req, res) => {
    const resp = calculate(parseFloat(req.query.number1), parseFloat(req.query.number2), parseFloat(req.query.number3))
    const response = prime(resp.result)
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8" />'+
    '        <title>Node.js tests</title>'+
    '    </head>'+ 
    '    <body>'+
    '       <p id = "name">'+
          'Sum is ' + resp.result + " and it is prime: " + response.isPrime +
          '</p>'+
    '    </body>'+            
        '</html>');
    console.log(response)
    res.end()
    return;
})
app.get('/checkprime', (req, res) => {
    const response = prime(req.query.number)
    res.writeHead(200, {"Content-Type": "text/html"});
    res.write('<!DOCTYPE html>'+
    '<html>'+
    '    <head>'+
    '        <meta charset="utf-8" />'+
    '        <title>Node.js tests</title>'+
    '    </head>'+ 
    '    <body>'+
    '       <p id = "name">'+
          'Number ' + req.query.number + " isPrime: " + response.isPrime +
          '</p>'+
    '    </body>'+            
        '</html>');
    console.log(response)
    res.end()
    return;
})
app.listen({ port: 8080 }, () => {
    console.log('Server is running...')
})