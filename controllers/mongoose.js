const mongoose = require('mongoose')

async function connectMongoose() {
	try {
		await mongoose.connect(process.env.MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		})
		console.log('Connected Database Successfully')
	} catch (error) {
		console.log(error)
	}
}

module.exports = connectMongoose
