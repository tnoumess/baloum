'use strict';

/**
 * @ngdoc overview
 * @name clientApp
 * @description
 * # clientApp
 *
 * Main module of the application.
 */
angular
  .module('clientApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'restangular',

  ])
  
   .config(function ($routeProvider,RestangularProvider) {console.log('in');
   
   RestangularProvider.setBaseUrl('http:localhost:3000');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
       // controllerAs: 'main'
      })
       .when('/students', {
        templateUrl: 'views/students.html',
        controller: 'StudentsCtrl'
        //, controllerAs: 'students'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

   .factory('StudentRestangular', function(Restangular){
    return Restangular.withConfig(function(RestangularConfigurer){
      RestangularConfigurer.setRestangularField({
        id:'_id'
      });
    });
  })
   .factory('Student',function(StudentRestangular,$http){
    return StudentRestangular.service('student');
   });