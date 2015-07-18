var mongoose= require('mongoose');

var studentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	major: {
		type: String,
		required: true
	},
	country: {
		type: String,
		required: true
	}
});

//export the model schema

module.exports=studentSchema;