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
    
    myData.delete = function(book){
        myData.books.splice(myData.books.indexOf(book),1);
        return $http.delete('/books/' + book._id, book)
   .then(
       function(response){
           console.log("Deleted!?!?");
         // success callback
       }, 
       function(response){
           console.log("Delete failed");
         // failure call back
       }
    );
        };

   myData.update = function (post) {
        return $http.put('/books:' + post._id + '')
            .success(function (data) {
                post.title = "Hiasdklfjh";
            });
    };
    return myData;

}]);