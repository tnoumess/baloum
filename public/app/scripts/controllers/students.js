'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:StudentsCtrl
 * @description
 * # StudentsCtrl
 * Controller of the clientApp
 */
angular.module('clientApp')
  .controller('StudentsCtrl', function ($scope) {
  	//Call a service that fetches data from mongodb
    $scope.students = [
      {
      	name:'Edson',
      	major:'SWE',
      	country:'Cameroon'
      },
      {
        name:'Tawo',
      	major:'Max',
      	country:'USA'
      },
      {
        name:'Taka',
      	major:'Junior',
      	country:'UK'
      }

    ];console.log($scope.students);  
  });
