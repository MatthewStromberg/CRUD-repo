var app = angular.module('crudapp', ['ui.router']);

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

   myData.upvoteComment = function (post, comment) {
        return $http.put('/books/' + post._id + '/comments/' + comment._id + '/upvote')
            .success(function (data) {
                comment.upvotes += 1;
            });
    };
    return myData;

}]);

app.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home', {
            url: '/home'
            , templateUrl: '../htmlTemplates/books.html'
            , controller: 'MainController'
            , resolve: {
                postPromise: ['books', function (posts) {
                    return posts.getAll();
                }]
            }
        });
    $urlRouterProvider.otherwise('home');
}]);

app.controller('MainController', ['$scope', 'books', function ($scope, books) {
    $scope.test = 'Hello world!';
    $scope.books = books.books;
/*    $scope.incrementUpvotes = function (book) {
        books.upvote(book);
    };
*/
    
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
/*
app.controller('PostsCtrl', ['$scope', '$stateParams', 'posts', function ($scope, $stateParams, posts) {
    $scope.post = posts.posts[$stateParams.id];

}]);
*/