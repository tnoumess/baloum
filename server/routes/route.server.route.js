'use strict';


//load the models
var student = require('../models/student.server.model');

module.exports = {
	'/student': require('../controllers/student.server.controller')
// pass the controller you would like to expose

};

// expose the routes to our app with module.exports
module.exports = function(app) {


app.get('/render', function(req, res) {
    console.log('render');
  res.render('index', {title: 'res vs app render'})
})


    // api ---------------------------------------------------------------------
    // get all students
    app.get('/api/students', function(req, res) {
 
     student.find(function(err, students) {

    //   setInterval(function(){
    //  console.log('world');
    // },2000)
    // console.log('hello');

    // setTimeout(function(){
    //  console.log('edson');
    // },5000);

              //  if there is an error retrieving, send the error. 
                //                nothing after res.send(err) will execute
                if (err)
                    res.send(err);

                res.json(students); // return all students in JSON format
            });

    });

    // create todo and send back all students after creation
    app.post('/api/students', function(req, res) {

      //  ...

    });

    // delete a student
    app.delete('/api/students/:student_id', function(req, res) {

       // req.param.student_id ...

    });

    // application -------------------------------------------------------------
    app.get('/', function(req, res) {console.log('in server router'); 
        //res.sendFile('/home/edson/Desktop/baloum/client/views/index.html'); // load the single view file (angular will handle the page changes on the front-end)
        res.render('index.ejs',{title: 'welcome'});
    });
// application -------------------------------------------------------------
    app.get('/home', function(req, res) {console.log('in server router'); 
       res.render('index',{title: 'Index'});
    
    });

    app.get('/about', function(req, res) {
    res.render('about',{title: 'About'});
   });

    app.get('/*', function(req, res) {
    res.render('404.server.view.ejs',{title: '404'});
   });

};