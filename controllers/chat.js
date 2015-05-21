

	var Chat = require('../models/chat');

	var UserCtrl = require('../controllers/user');


	exports.getAllChats = function (callBack) {

		var response = [];

		Chat.find({

		}, {
			'_id': false, 
			'__v': false
		})
		.populate({
			path: 'sender receiver',
			select: '-_id firstName lastName'
		})
		.exec(function (err, chatOb) {

			if (err) {

				response = {
					err: err
				};
			}

			else {
				response.push(chatOb);
			}

			callBack(response);			
		});
	};


	exports.getMyChats = function (myUserId, callBack) {

		var response = [];

		Chat.find({

			$or : [{ 
				sender : myUserId.toObjectId()
			}, { 
				receiver : myUserId.toObjectId()
			}]
		}, {
			'_id': false, 
			'__v': false
		})
		.populate({
			path: 'sender receiver',
			select: '-_id firstName lastName'
		})
		.exec(function (err, chatOb) {

			if (err) {

				response = {
					err: err
				};
			}

			else {
				response.push(chatOb);
			}

			callBack(response);			
		});
	};

	exports.saveChat = function (chatOb, callBack) {


		var response = {};

		var chat = new Chat();

		chat.message = chatOb.message;
		chat.sender = chatOb.sender;
		chat.receiver = chatOb.receiver;

		Chat.create(chat, function (err, chatResponse) {

			if (err) {
				response = {
					err: err
				};
			} 

			else {

				response = {
					status: 201,
					message: 'Chat is saved'
				};
			}

			callBack(response);
		});
	};