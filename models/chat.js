	

	var mongoose = require('mongoose');
	var Schema = mongoose.Schema;


	module.exports = mongoose.model('Chat', new Schema({
	    message: String,
	    sender: { 
	    	type: Schema.Types.ObjectId, 
	    	ref: 'User' 
	   	},
	    receiver: { 
	    	type: Schema.Types.ObjectId, 
	    	ref: 'User' 
	   	},
	    sentOn: Date
	}));

	/*

		{

		    "message": "Hey Man !!",
		    "sender": "554e1ed2e319f6fc89c55cd4",
		    "receiver": "554e1eeae319f6fc89c55cd5"
		}

	*/