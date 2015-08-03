// alert('hello from controller');
angular.module('StudentCtrl', []).controller('StudentController', function($scope) {
console.log('in student controller');
    $scope.student = 'Just a test!';

});

// var Ctrl=angular.module('StudentCtrl',[]);

// Ctrl.controller('StudentController', function($scope){
// 	$scope.student='just test';
// })
// function StudentCtrl($scope){
// 	$scope.student='just test';
// }