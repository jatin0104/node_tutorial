var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/admin";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("admin");
    var myobj = { name: "Company Inc", age: 37, gender: 'Male' };
    dbo.collection("user").insertOne(myobj, function(err, res) {
      if (err) throw err;
      console.log("1 document inserted");
      db.close();
    });
}); 