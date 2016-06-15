var mongoose = require('mongoose');
var Book = mongoose.model('BookModel');
var express = require('express');
var router = express.Router();

console.log("Index page loaded");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
    console.log("Home page get request!");
});

router.param('book', function(req, res, next, id) {
  var query = Book.findById(id);
  query.exec(function (err, post){
    if (err) { return next(err); }
    if (!post) { return next(new Error('can\'t find post')); }
    req.post = post;
    return next();
  });
});

router.get('/books', function(req, res, next) {
  Book.find(function(err, books){
    if(err){ return next(err); }
      console.log("Books page get request!");
    res.json(books);
  });
});

router.post('/books', function(req, res, next) {
  var book = new Book(req.body);

  book.save(function(err, book){
    if(err){ return next(err); }

    res.json(book);
      console.log("Books page Post request!");
  });
});

router.delete('/books', function(req, res, next, id){
    Book.findById(id).remove(callback);
/*        if(err) return next(err);
        console.log("Delete request completed");
*/
});
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