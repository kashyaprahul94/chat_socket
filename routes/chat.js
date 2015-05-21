



	var ChatCtrl = require('../controllers/chat');



	exports.getAll = function (req, res) {

		ChatCtrl.getAllChats(function (chatsData) {

			if (chatsData.err) {
				res.send(chatsData.err);
			} else {
				res.status(200).json(chatsData);
			}
		});
	};

	exports.getOne = function (req, res) {

		ChatCtrl.getAllChats(function (chatsData) {

			if (chatsData.err) {
				res.send(chatsData.err);
			} else {
				res.status(200).json(chatsData);
			}
		});
	};

	exports.create = function (req, res) {

		UserCtrl.saveChat(req.body, function (chatResponse) {

			if (chatResponse.err) {
				res.send(chatsData.err);
			} else {
				res.status(201).json(chatResponse);
			}
		});
	};




	exports.getMy = function (req, res) {

		ChatCtrl.getMyChats(req.body.userId, function (chatsData) {

			if (chatsData.err) {
				res.send(chatsData.err);
			} else {
				res.status(200).json(chatsData);
			}
		});
	};
