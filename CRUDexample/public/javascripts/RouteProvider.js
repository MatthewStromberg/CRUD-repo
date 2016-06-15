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