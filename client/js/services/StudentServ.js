
angular.module('StudentServ', []).factory('Student', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/students');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new student
        create : function(student) {
            return $http.post('/api/students', student);
        },

        // call to DELETE a student
        delete : function(id) {
            return $http.delete('/api/students/' + id);
        }
    }       

}]);