/**
 * Created by tcrow on 2016/3/24 0024.
 */
app.controller('AppCtrl', ['$scope','$rootScope','$cookies','$location', function ($scope,$rootScope,$cookies,$location) {
    $scope.gotoDemoPage = function(){
        $location.path("/demo");
    }
}]);

app.controller('DemoCtrl', ['$scope','$rootScope','$cookies','$location', function ($scope,$rootScope,$cookies,$location) {
    $scope.msg = 'hello world!!!!';
}]);
