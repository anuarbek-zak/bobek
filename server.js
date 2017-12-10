var compression = require('compression');
var express = require('express');
var path = require('path');
var session = require('express-session');
var cors = require('cors');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var User  = require('./server/models/User');
var app = express();
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
// var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
// if(env === 'development'){
	mongoose.connect('mongodb://localhost:27017/bobek');
// }else {
// 	mongoose.connect('mongodb://Anuarbek:14nur97@ds157248.mlab.com:57248/mydb');
// }


// Middlewares
app.disable('view cache');
//Compress our responses
app.use(compression());
app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));
app.use(bodyParser.raw({ type: 'application/vnd.custom-type' }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('port', process.env.PORT || 8001);

app.use('/bower_components',  express.static(__dirname + '/bower_components'));
app.use(express.static(path.join(__dirname, 'frontend'), { maxAge: 3600000 }));
app.engine('html', require('ejs').renderFile)
app.get('/bobek',function(req,res,next) {
  res.render(path.join(__dirname + '/frontend/bobek.html'));
})
app.get('/besuirek',function(req,res,next) {
  res.render(path.join(__dirname + '/frontend/besuirek.html'));
})

app.use(session({ secret: 'your secret here',
	resave:  true,
	saveUninitialized: true,
	key: 'some key',
	store: new MongoStore({ mongooseConnection: mongoose.connection })
}));


var routes = require('./server/routes/routes');	

app.use('/',routes);
console.log('new back')
var users = [];

app.use(function(err, req, res, next) {
	console.error(err.stack);
	res.send(500, { message: err.message });	
});

// Start server
var server = app.listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
