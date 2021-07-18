var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";
var schema = 'admin';

MongoClient.connect(url,(err,db)=>{
    if(err) throw err;
    var dbp = db.db(schema);
    dbp.collection('user').find({}).toArray( (err,result)=>{
        console.log( result );
    } )
})