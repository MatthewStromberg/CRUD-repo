app.controller('MainController', ['$scope', 'books', function ($scope, books) {
    $scope.test = 'Hello world!';
    $scope.books = books.books;
    $scope.deleteBook = function (book) {
        console.log("Deleting book with id: " + book._id);
        books.delete(book);
    }
    $scope.update = function(book){
        console.log("Updating book with id: " + book._id);
        books.update(book);
    }
    $scope.addBook = function () {
        if (!$scope.title || $scope.title === '') {
            return;
        }
        books.create({
            title: $scope.title,
            author: $scope.author,
            description: $scope.description,
            cost: $scope.cost
        });
        $scope.title = '';
        $scope.author = '';
        $scope.description = '';
        $scope.cost = 0;
    };
}]);
