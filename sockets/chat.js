

	var ChatCtrl = require('../controllers/chat');


	module.exports = function(server) {

		var io = require('socket.io').listen(server);

		io.sockets.on('connection', function (socket) {

			socket.emit('init', {

			});

			socket.on('messages:get', function (userOb) {

				ChatCtrl.getMyChats(userOb.userId, function (chatsData) {

					if ( ! chatsData.err ) {
						socket.emit('messages:updated', chatsData);
					}
				});
			});

			socket.on('message:send', function (chatOb) {

				ChatCtrl.saveChat(chatOb, function (chatResponse) {

					if ( ! chatResponse.err ) {
						io.sockets.emit('chat:updated', chatOb);
					}
				});				
			});
		});
	};