const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const MongoClient = require('mongodb').MongoClient;
const port = 4000;

const dbName = 'mwa';
const url = `mongodb://localhost:27017`;
const options = {
    useNewUrlParser: true,
    reconnectTries: 60,
    reconnectInterval: 1000
};

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

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

MongoClient.connect(url, options, (err, database) => {
    if (err) {
        console.log(`FATAL MONGODB CONNECTION ERROR: ${err}:${err.stack}`);
        process.exit(1)
    }
    app.db = database.db('secret');
    app.listen(port, () => {
        console.log("Listening on port %s", port);
    })
});

module.exports = app;
