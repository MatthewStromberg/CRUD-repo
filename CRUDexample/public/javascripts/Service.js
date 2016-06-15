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
        return $http.delete('/books/' + book._id, book)
   .then(
       function(response){
           myData.books.splice(myData.books.indexOf(book),1);
           console.log("Book deleted!");
         // success callback
       }, 
       function(response){
           console.log("Delete failed");
         // failure call back
       }
    );
        };

   myData.update = function (book,cost) {
        return $http.put('/books/' + book._id + '',book)
            .success(function (data) {
            book.title = data.title;
//                book.title = "Hiasdklfjh";
            });
    };
    return myData;

}]);