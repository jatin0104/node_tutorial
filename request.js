const dotenv = require('dotenv');
dotenv.config();
const http = require('http');
const express = require('express');
const app = express();

const axios = require('axios')

// HomePage 
app.get('/',(req,res)=>{
    
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        console.log('res',response);
        res.json(response.data);
    }).catch((err)=>{
        console.log(err);
    })

});


// Server Listening to port
app.listen(process.env.PORT,()=>{
    console.log(`server is listing on PORT: ${process.env.PORT} under ${process.env.NODE_ENV} Enviroment`);
});