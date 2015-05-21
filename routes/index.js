	


	module.exports = function (app) {

	    var user = require('./user');
	    var chat = require('./chat');


	    app.options('/*', function(req, res, next) {
	    	
	        if ( req.method.toLowerCase() !== 'options' ) {
	            return next();
	        }
	        return res.status(204).end();
	    });


	    app.get('/', function(req, res) {
			res.send('Welcome');
	    });





	    app.get('/user', user.getAll);
	    app.get('/user/:userId', user.getOne);
	    app.post('/user', user.create);


	    app.get('/chat', chat.getAll);
	    app.get('/chat/:userId', chat.getOne);
	    app.post('/chat', chat.create);
	    app.post('/chat/myChats', chat.getMy);
	};