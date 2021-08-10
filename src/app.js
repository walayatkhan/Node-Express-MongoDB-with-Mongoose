const express = require('express');
const requestLogger = require('morgan');
const cors = require('cors');
const userRouter = require('./users/routes');
const settingsRouter = require('./settings/routes')
const config = require('./configuration/config');
const statusRouter = require('./status/router')

const app = express();

app.use(requestLogger('tiny'));
app.use(express.json());
app.use(
	express.urlencoded({
		extended: false,
	})
);
app.use(cors());
app.use('/', statusRouter);

app.use('/users', userRouter);
app.use('/settings', settingsRouter);

app.use(function (error, req, res, next) {
	// for debugging purposed, but I don't want it to run by default
	// if (config.ENVIRONMENT === 'test') {
	console.error(error);
	// }
	next(error);
});

app.use(function (error, req, res, next) {
	if (!res.headersSent && error.statusCode) {
		res.status(error.statusCode).send({
			error: error,
		});
	} else {
		next(error);
	}
});

process.on('unhandledRejection', (error, promise) => {
	console.error('🔥 -> Promise rejection here: ', promise);
	console.error('🐞 -> The error was: ', error.toString());
});

process.on('uncaughtException', error => {
	console.error('🔥 -> something terrible happened: ', error);
	console.error('🐞 -> The error was: ', error.toString());
	process.exit(1);
});

module.exports = app;


