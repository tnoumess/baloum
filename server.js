/*  Application bootstrap*/

// set up ======================================================================
   console.log(__dirname);
var express = require('./node_modules/express');
var app = express();  // create our app w/ express
var mongoose = require('./node_modules/mongoose');  // mongoose for mongodb
var bodyParser = require('./node_modules/body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('./node_modules/method-override'); // simulate DELETE and PUT (express4)
var _ = require('./node_modules/lodash');
var morgan = require('./node_modules/morgan');  // log requests to the console (express4)
var database = require('./config/database');
var http=require('http');
var port = process.env.PORT || 8080;

// Configuration =======================================================
    app.use(express.static(__dirname + '/client'));                 // set the static files location /public/img will be /img for users
    app.use(morgan('dev'));                                         // log every request to the console
    app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
    app.use(bodyParser.json());                                     // parse application/json
    app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json
    app.use(methodOverride());
    app.engine('html', require('ejs').renderFile);
    app.set('views', __dirname + '/server/views');
    app.set('view engine', 'ejs');
// Process request
app.use('/hello', function(req,res,next){
	res.send('hello there!');
	next();
});

//Core support configuration ===========================================
app.use(function(req,res,next) {
	res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});
  

// connect to mongoDB database on modulus.io
// mongoose.createConnection(database.url);     


//Load the models ======================================================
app.models=require('./server/models/index');


//Registering the routes ===============================================
require('./server/routes/route.server.route')(app);
//var routes = require('./server/routes/routes');
// _.each(routes,function(controller,route){
// 	app.use(route, controller(app, route));
// });


// Add Middleware necessary for REST API's==============================
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method_Override'));



//Connect to MongoDB ===================================================
mongoose.connect(database.url);

//Starting the node server and listening ==================================================
mongoose.connection.once('open', function(){
	console.log('Listening on port 8080...');
	// setInterval(function(){
	// 	console.log('world');
	// },2000)
	// console.log('hello');
	app.listen(port);
});