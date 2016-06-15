var mongoose = require('mongoose');
var Book = mongoose.model('BookModel');
var express = require('express');
var router = express.Router();

console.log("Index page loaded");
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {
        title: 'Express'
    });
    console.log("Home page get request!");
});

router.param('book', function (req, res, next, id) {
    var query = Book.findById(id);
    query.exec(function (err, post) {
        if (err) {
            return next(err);
        }
        if (!post) {
            return next(new Error('can\'t find post'));
        }
        req.post = post;
        return next();
    });
});

router.get('/books/:book', function (req, res) {
    res.json(req.post);
});

router.get('/books', function (req, res, next) {
    Book.find(function (err, books) {
        if (err) {
            return next(err);
        }
        console.log("Books page get request!");
        res.json(books);
    });
});

router.post('/books', function (req, res, next) {
    var book = new Book(req.body);

    book.save(function (err, book) {
        if (err) {
            return next(err);
        }

        res.json(book);
        console.log("Books page Post request!");
    });
});

router.delete('/books/:id', function (req, res) {
    Book.findByIdAndRemove(req.params.id, function (err, data) {

        if (err) {
            console.log("Error in delete!");
        }
        return res.json(data);

    });

});

router.put('/books/:id', function (req, res) {

    console.log("Books page update request!");
    Book.findByIdAndUpdate(req.params.id, {
        "title": "Catcher in the ballpark"
        , "author": "J.D. Salinger"
        , "description": "A book about the wonders of a boy who loses his innocence and also this book was banned in most schools"
        , "cost": 200
    }, function (err, data) {
        //    Book.findByIdAndUpdate(req.params.id, {"cost":req.params.cost, function (err, data) {
        //req.Book.update(function (err, data) {
        if (err) {
            console.log("Error in update!");
        }
        return res.json(data);


    });
});
//    Book.findById(id).remove(callback);
/*        if(err) return next(err);
        console.log("Delete request completed");

});
*/
/*
router.put('/books/:book/title',function(req,res,next){
    req.book.update(function(err,book){
        if(err) { return next(err);}
        res.json(book);
    })
})
*/
/*
TODO: Delete
router.put('/posts/:post/upvote', function(req, res, next) {
  req.post.upvote(function(err, post){
    if (err) { return next(err); }
      console.log("Upvoted this post!");
    res.json(post);
  });
});
*/

module.exports = router;