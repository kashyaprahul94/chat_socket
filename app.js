

	var express = require('express');
	var bodyParser = require('body-parser');

	var app = express();
	var server = require('http').createServer(app);



	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({
		extended: true
	}));

	app.use(function(req, res, next) {
		res.header('Access-Control-Allow-Origin', '*');
		res.header('Access-Control-Allow-Headers', 'Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With');
		res.header('Access-Control-Allow-Methods', 'GET, PUT, POST');
		next();
	});

	app.use('/app', express.static(__dirname  + '/public'));




	require('./configs/db-config');
	require('./sockets/chat')(server);
	require('./routes')(app);
	require('./utils/utils');
	


	app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 3000);
	app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || 'localhost');

	server.listen(app.get('port'), app.get('ipaddr'), function() {
		console.log('Express server Running on IP/hostname: "' + app.get('ipaddr') + '" and port: "' + app.get('port') + '"');
	});


	module.exports = app;