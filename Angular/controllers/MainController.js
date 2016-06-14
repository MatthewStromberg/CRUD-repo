app.controller('MainCtrl', ['$scope', function ($scope) {
    $scope.addPost = function () {
        $scope.posts.push({
            title: $scope.title, 
            link: $scope.link, 
            upvotes: 0
        });
        $scope.title = '';
        $scope.link = '';
    };
}]);