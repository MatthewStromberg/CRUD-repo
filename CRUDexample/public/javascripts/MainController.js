app.controller('MainController', ['$scope', 'books', function ($scope, books) {
    $scope.test = 'Hello world!';
    $scope.books = books.books;
    $scope.deleteBook = function (id) {
        console.log("Deleting book with id: " + id);
        books.delete(id);
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
