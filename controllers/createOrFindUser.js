const mongoose = require('mongoose')
const { User } = require('../models/User')

async function createOrFindUser(req, res) {
	try {
		const { nickname, email } = req.body.userDetails
		if (!nickname || !email) {
			return res.status(400).send({ error: 'Missing nickname or email' })
		}
		const user = await User.findOne({ email })
		if (user) {
			return res.json({ user })
		}
		const newUser = new User({
			nickname,
			email,
		})
		const savedUser = await newUser.save()
		return res.json({ user: savedUser })
	} catch (error) {
		return res.status(500).json({ error: 'Server error' })
	}
}

module.exports = createOrFindUser
