var app = angular.module('app',['ngRoute']);


//Controllers

app.controller('pageCtrl',['$scope','$http', '$sce', function($scope,$http, $sce){
    $http.get('https://rawgit.com/chandraakella29/3c1060d8ed642f35e6e46b1eee74c17e/raw/167ff9930eea875bd579bf5aeed84a57c5ae8be6/index.html')
            .success(function (response) {
                 console.log('response is', response);
                 $scope.htmlResponse = $sce.trustAsHtml(response);

            })
            .error(function (data, status, headers, config) {
            });
    
    
}])

