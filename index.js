const express = require ('express')
const {response} = require("express");
const app = express()
const port = 3000

app.get('/', (req,res)=> {
    res.send('<a href="/contact"> Contact us </a> <br> <a href="/about"> About us </a>');
});
app.get('/contact',(req,res)=>{
    res.send( '<h1> About Us page </h1>');
})

app.get('/about',(req,res)=>{
    res.send('<h1> About Us page </h1>');
})

app.get('*',(req,res)=>{
    res.send('404. This page does not exist. <a href="/"> Go to Homepage </a>')
})

// listen to app via port 3000

app.listen(3000, ()=>{
    console.log('Server started on http://localhost:3000');
});