	




	
	String.prototype.toObjectId = function() {
		var ObjectId = (require('mongoose').Types.ObjectId);
		return new ObjectId(this.toString());
	};

	var Utilities = {

	    
	};

	module.exports = Utilities;