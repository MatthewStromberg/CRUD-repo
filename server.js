var express = require('express');
var bodyParser = require('body-parser')
var app = express();
var mongodb = require('mongodb');


var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/cruddb';

var db


MongoClient.connect(url, function (err, dbase) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    } else {
        console.log('Connection established to', url);
        db = dbase
        app.listen(3000, function () {
            console.log('listening on 3000')
        })
    }
})

app.use(bodyParser.urlencoded({
    extended: true
}))


app.get('/', function (req, res) {
    //C:\Users\Stromz\Documents\GitHub\CRUD-repo\NodeJS/index.html
    var cursor = db.collection('users').find()
    db.collection('users').find().toArray(function (err, results) {
        console.log(results)
        res.sendFile(__dirname + '/index.html')

        // send HTML file populated with quotes here
    })
})

app.post('/file', function (req, res) {
    console.log(req.body)
    db.collection("users").save(req.body, function (err, result) {
        if (err)
            return console.log(err)
        else {
            console.log("Saved to Database")
            res.redirect('/')
        }
    })
})







/*

var express = require('express')
var app = express()
var bodyParser = require('body-parser')


var MongoClient = mongodb.MongoClient;

var url = 'mongodb://localhost:27017/cruddb';

var collection = null;


MongoClient.connect(url, function (err, db) {
  if (err) { 
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    console.log('Connection established to', url);

//Collection named "users"
      var collection = db.collection('users');
  }
});

if{    //Create some users
    var user1 = {name: 'modulus admin', age: 42, roles: ['admin', 'moderator', 'user']};

    // Insert some users
    collection.insert(user1, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log('Inserted %d documents into the "users" collection. The documents inserted with "_id" are:', result.length, result);
      }
    //Close connection
    db.close();
    });
  }
  
});
}

app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

console.log("Hello!")
app.get('/', (req, res) => {
  res.send("Hello World!")
})
*/