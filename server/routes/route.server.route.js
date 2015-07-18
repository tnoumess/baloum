'use strict';


//load the models
var student = require('../models/student.server.model');

module.exports = {
	'/student': require('../controllers/student.server.controller')
// pass the controller you would like to expose

};

// expose the routes to our app with module.exports
module.exports = function(app) {

    // api ---------------------------------------------------------------------
    // get all students
    app.get('/api/students', function(req, res) {

      //  ...

    });

    // create todo and send back all students after creation
    app.post('/api/students', function(req, res) {

      //  ...

    });

    // delete a student
    app.delete('/api/students/:student_id', function(req, res) {

       // ...

    });

    // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};