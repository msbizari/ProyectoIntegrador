var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const methodOverride =  require('method-override');

var mainRouter = require('./src/routes/main');
var userRouter = require('./src/routes/users');
var productosRouter = require('./src/routes/productos');

var productosApiRouter = require('./src/routes/api/productosApi');
var usersApiRouter = require('./src/routes/api/usersApi');

const session = require('express-session'); //luego de escribir la constante en mainControlle.js, aparecio solita aca tmb.
const userLoggedMiddleware = require('./src/middlewares/userLoggedMiddleware');
const marcasHeaderMiddleware = require('./src/middlewares/marcasHeaderMiddleware');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'src' ,'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({secret: "Nuestro mensaje secreto",
resave: false,
	saveUninitialized: false,}));


app.use(userLoggedMiddleware);
app.use(marcasHeaderMiddleware);

app.use('/', mainRouter);
app.use('/users', userRouter);
app.use('/productos', productosRouter);

//app.use para rutas de api
app.use('/api/users', usersApiRouter);
app.use('/api/productos', productosApiRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
