var app = angular.module('app',['ngRoute']);


//Controllers

app.controller('pageCtrl',['$scope','$http', '$sce', function($scope,$http, $sce){
    $http.get('http://stj2dev.convio.net/site/TR?pg=personal&fr_id=19412&px=2094527')
            .success(function (response) {
                 console.log('response is', response);
                 $scope.htmlResponse = $sce.trustAsHtml(response);

            })
            .error(function (data, status, headers, config) {
            });
    
    
}])

