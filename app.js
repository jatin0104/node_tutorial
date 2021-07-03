const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const fs = require('fs');
var path = require('path');

// INCLUDE TEMPLATE ENGINE
let ejs = require('ejs');

app.set('views', path.join(__dirname, 'views'));
// Set EJS as templating engine
app.set('view engine', 'ejs');

// HomePage 
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/template/homepage.html');
});

// 404
app.get('/contact',(req,res)=>{
    res.sendFile(__dirname+'/template/404.html');
});


// LIST OF ITEM
app.get('/users',(req,res)=>{
    var people = [{'name':'geddy'}, {'name':'neil'}, {'name':'alex'}];
    console.log(people);
    res.render('pages/list', {user:people});
    // res.send()
})



// Server Listening to port
app.listen(process.env.PORT,()=>{
    console.log(`server is listing on PORT: ${process.env.PORT} under ${process.env.NODE_ENV} Enviroment`);
});