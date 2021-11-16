const { User } = require('../models/User')

async function getAllFavorite(req, res) {
	try {
		let { user } = req.query
		user = JSON.parse(user)
		const userData = await User.findOne({ email: user.email })
		return res.json({
			status: 'success',
			data: userData.favoritesFacts,
		})
	} catch (e) {
		return res.status(400).json({
			status: 'error',
			message: e.message,
		})
	}
}

module.exports = getAllFavorite
