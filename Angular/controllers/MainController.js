app.controller('MainController', ['$scope', '$http', function ($scope, $http) {
    $scope.addPost = function() {
        $http.get('http://localhost:3000/dowork', {
            "msg": "hi"
        }).success(function (data) {
            console.log(data);
        });
    };
}]);