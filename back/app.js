
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , form = require('connect-form');

var app = module.exports = express(form({keepExtensions:true}));

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  // app.use(express.bodyParser());
  // app.use(express.json())
  // app.use(express.urlencoded())

  app.use(express.methodOverride());
  app.use(app.router);
  // app.use()
  app.use(express.static(__dirname + '/../front/src'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);
app.post('/upload', routes.test);

app.listen(3000, function(){
  // console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
