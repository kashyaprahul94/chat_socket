

	var User = require('../models/user');

	var UserCtrl = require('../controllers/user');



	exports.getAll = function (req, res) {

		UserCtrl.getUsers(function (usersData) {

			if (usersData.err) {
				res.send(usersData.err);
			} else {
				res.status(200).json(usersData);
			}
		});
	};

	exports.getOne = function (req, res) {

		UserCtrl.getUserById(req.params.userId, function (userData) {

			if (userData.err) {
				res.send(userData.err);
			} else {
				res.status(200).json(userData);
			}
		});
	};

	exports.create = function (req, res) {

		UserCtrl.saveUser(req.body, function (userResponse) {

			if (userResponse.err) {
				res.send(userResponse.err);
			} else {
				res.status(201).json(userResponse);
			}
		});
	};
