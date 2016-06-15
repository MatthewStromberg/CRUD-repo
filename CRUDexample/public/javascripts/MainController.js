app.controller('MainController', ['$scope', 'books', function ($scope, books) {
    $scope.test = 'Hello world!';
    $scope.books = books.books;
/*    $scope.incrementUpvotes = function (book) {
        books.upvote(book);
    };
*/
    $scope.addPost = function () {
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
/*
app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function ($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

}]);
*/