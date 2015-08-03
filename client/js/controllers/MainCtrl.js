// alert('hello from controller1');
angular.module('MainCtrl', []).controller('MainController', function($scope) {

    $scope.main = 'Just a test of main!';

    // send to server
    // $http.get('/api/post/' + $routeParams.id).
    // success(function(data) {
    //   $scope.form = data.post;
    // });

});