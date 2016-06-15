var mongoose = require('mongoose');

var BookSchema = new mongoose.Schema({
    title: String
    , author: String
    , description: String
    , cost: {
        type: Number
        , default: 0
    }
, });

BookSchema.methods.update = function(cb){
    this.title = "Blahblahimatitle";
    this.save(cb);
}

/*
PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};
*/
mongoose.model('BookModel', BookSchema);