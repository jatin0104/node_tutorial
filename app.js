const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const fs = require('fs');
var path = require('path');

// INCLUDE TEMPLATE ENGINE
let ejs = require('ejs');
const axios = require('axios');

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

// Post page using external api
app.get('/posts',(req,res)=>{

  axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
    console.log('res',response);
    // res.json(response.data);
    res.render('pages/post', {post:response.data, pageTitle: 'Post Page', menuActive:true});
}).catch((err)=>{
    console.log(err);
})

})

// Profile
app.get('/profile/:id', (req,res)=>{

    console.log(req.params);
    var people =  [
        {
              "id": 1,
           "firstName": "Joe",
           "lastName": "Jackson",
           "gender": "male",
           "age": 28,
           "number": "7349282382"
        },
        {
          "id": 2,
           "firstName": "James",
           "lastName": "Smith",
           "gender": "male",
           "age": 32,
           "number": "5678568567"
        },  
        {
          "id": 3,
           "firstName": "Emily",
           "lastName": "Jones",
           "gender": "female",
           "age": 24,
           "number": "456754675"
        }
      ]
    var matchArr = people.filter(function (entry) { return entry.id == req.params.id; });
      console.log('match:',matchArr)
    res.render('pages/profile',{ user: matchArr });
})


// LIST OF ITEM
app.get('/users',(req,res)=>{
    var people =  [
          {
                "id": 1,
             "firstName": "Joe",
             "lastName": "Jackson",
             "gender": "male",
             "age": 28,
             "number": "7349282382"
          },
          {
            "id": 2,
             "firstName": "James",
             "lastName": "Smith",
             "gender": "male",
             "age": 32,
             "number": "5678568567"
          },
          {
            "id": 3,
             "firstName": "Emily",
             "lastName": "Jones",
             "gender": "female",
             "age": 24,
             "number": "456754675"
          }
        ]
      res.render('pages/list', {user:people});
    // res.send('ok')
})



// Server Listening to port
app.listen(process.env.PORT,()=>{
    console.log(`server is listing on PORT: ${process.env.PORT} under ${process.env.NODE_ENV} Enviroment`);
});