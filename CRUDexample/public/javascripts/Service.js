app.factory('books', ['$http', function ($http) {
    var myData = {
        books: []
    };

   myData.getAll = function () {
        return $http.get('/books').success(function (data) {
            angular.copy(data,myData.books);
        });
    };
   myData.create = function (post) {
        return $http.post('/books', post).success(function (data) {
           myData.books.push(data);
        });
    };
   myData.get = function (id) {
        return $http.get('/books/' + id).then(function (res) {
            return res.data;
        });
    };
    
    myData.delete = function(id){
        return $http.get('/books/' + id).then(function(res){
            console.log(res.data)
            console.log("Deleted!");
        });
    };

   myData.upvoteComment = function (post, comment) {
        return $http.put('/books/' + post._id + '/comments/' + comment._id + '/upvote')
            .success(function (data) {
                comment.upvotes += 1;
            });
    };
    return myData;

}]);