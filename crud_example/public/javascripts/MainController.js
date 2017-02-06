app.controller('MainController', ['$scope', 'books', function ($scope, books) {
    $scope.test = 'Hello world!';
    $scope.books = books.books;
    $scope.deleteBook = function (book) {
        console.log("Deleting book with id: " + book._id);
        books.delete(book);
    };
    $scope.update = function(book, cost1){
        book.cost = cost1;
        console.log("Updating book with id: " + book._id);
        console.log("New cost will be: " + book.cost);
        books.update(book);
    };
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
