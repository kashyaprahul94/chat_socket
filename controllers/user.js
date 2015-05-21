

	var User = require('../models/user');




	exports.getUsers = function (callBack) {

		var response = [];

		User.find(function (err, users) {

			if (err) {

				response = {
					err: err
				};
			} 

			else {

				users.forEach(function (userOb) {

					var user = {
						userId: userOb.id,
						firstName: userOb.firstName,
						lastName: userOb.lastName,
						email: userOb.email
					};

					response.push(user);
				});
			}

			callBack(response);
		});
	};



	exports.getUserById = function (userId, callBack) {

		var response = {};

		User.findById(userId, function (err, userOb) {

			if (err) {

				response = {
					err: err
				};
			} 

			else {

				var user = {
					userId: userOb.id,
					firstName: userOb.firstName,
					lastName: userOb.lastName,
					email: userOb.email
				};

				response = user;
			}

			callBack(response);
		});
	};



	exports.saveUser = function (userOb, callBack) {

		var response = {};

		var user = new User();

		user.firstName = userOb.firstName;
		user.lastName = userOb.lastName;
		user.email = userOb.email;
		user.password = userOb.password;

		User.create(user, function (err, userResponse) {

			if (err) {
				response = {
					err: err
				};
			} 

			else {

				response = {
					status: 201,
					message: 'User is created'
				};
			}

			callBack(response);
		});
	};