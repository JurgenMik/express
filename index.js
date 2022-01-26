const express = require('express');
const path = require('path');
const app = express();
// add public direction
app.use(express.static('public'));
//add views directory path
app.set('views', path.join(__dirname, 'views'));
// add views template engine
app.set('view egning', 'ejs');

app.get('/user/:username', (req, res)=>{
    // get parameter data from addressrow
    let user =req.params.username;
    // use data in template
    res.render('index.ejs', {username:user});
});

app.listen(3000,()=>{
    console.log('Server started on http://localhost:3000');
});
