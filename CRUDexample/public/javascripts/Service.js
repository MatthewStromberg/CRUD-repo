app.factory('books', ['$http', function ($http) {
    var myData = {
        books: []
    };

   myData.getAll = function () {
        return $http.get('/posts').success(function (data) {
            angular.copy(data,myData.books);
        });
    };
   myData.create = function (post) {
        return $http.post('/posts', post).success(function (data) {
           myData.books.push(data);
        });
    };
   myData.get = function (id) {
        return $http.get('/posts/' + id).then(function (res) {
            return res.data;
        });
    };
   myData.addComment = function (id, comment) {
        return $http.post('/posts/' + id + '/comments', comment);
    };
   myData.upvoteComment = function (post, comment) {
        return $http.put('/posts/' + post._id + '/comments/' + comment._id + '/upvote')
            .success(function (data) {
                comment.upvotes += 1;
            });
    };
    return myData;

}]);
