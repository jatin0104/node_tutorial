const express = require('express');
const app = express();
const router = express.Router();

// MONGODB SETTING
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";

var bodyParser = require('body-parser');  
// Create application/x-www-form-urlencoded parser  
var urlencodedParser = bodyParser.urlencoded({ extended: true }) 

// app.use(express.json()) // for parsing application/json
// app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded


// ROUTER
router.get('/',(req,res)=>{
    res.send('<h1>First page</h1>')
});

// WITH PARAM
router.get('/user/:id', (req,res)=>{
    console.log(req.params.id);
    res.send('ok:')
})

// insert in db
router.post('/insert', urlencodedParser, (req,res)=>{
    
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("admin");
        var myobj = { 
            name: req.body.name, 
            age: parseInt(req.body.age),
            gender: req.body.gender
         };
        dbo.collection("user").insertOne(myobj, function(err, res) {
          if (err) throw err;
        //   console.log("1 document inserted");
          db.close();
        });
    });

    console.log(req.body);
    res.json({
        status: 200,
        message: 'details insert',
        data: req.body
    });
})


// GET COLLECTION DATA
router.get('/records', (req,res) => {

    MongoClient.connect(url, (err,db)=>{
        var dbo = db.db('admin');
        dbo.collection('user').find({}).toArray( (err,result) =>{
            res.json({
                status: 200,
                message: 'data found',
                data: result
            })
            db.close();
        })
    })

});

// GET COLLECTION DATA SORTED 
router.get('/record_sort', (req,res) => {

    MongoClient.connect(url, (err,db)=>{
        var dbo = db.db('admin');
        dbo.collection('user').find().sort({age:-1}).toArray( (err,result) =>{
            res.json({
                status: 200,
                message: 'data found',
                data: result
            })
            db.close();
        })
    })

});



// USE ROUTER AS DEFAULT
app.use(router)

// listening to port
app.listen(8000,()=>{
    console.log('Server is listening.. Request something');
});