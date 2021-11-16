const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
	nickname: String,
	email: String,
	favoritesFacts: [
		{
			fact: String,
			length: Number,
			factNumber: Number,
			path: String,
		},
	],
})

module.exports = { User: model('User', UserSchema) }
