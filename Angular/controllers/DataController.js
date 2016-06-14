app.controller("DataController",function($scope){
    $scope.clicked= function(){
/*      var data = $.param({
        book: JSON.stringify({
            author: $scope.author,
            title : $scope.title,
            body : $scope.body
        })
        */

      $http.post("/api/book/", data).success(function(data, status) {
        console.log('Data posted successfully');
      })
   }
});