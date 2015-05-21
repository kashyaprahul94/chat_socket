		

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;


	module.exports = mongoose.model('User', new Schema({

		firstName: { 
			type: String
		},

		lastName: { 
			type: String
		},

		email: { 
			type: String, 
			required: true, 
			index: {
				unique: true 
			} 
		},

		password: { 
			type: String
		}
	}));



		/*	
		
			{
				"firstName": "Rahul",
				"lastName": "Kashyap",
				"email": "kashyaprahul94@gmail.com",
				"password": "123456"
			}

		 */