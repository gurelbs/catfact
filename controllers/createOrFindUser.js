const mongoose = require('mongoose')
const { User } = require('../models/User')

function createOrFindUser(req, res, next) {
	const { nickname, email } = req.body.userDetails
	if (!nickname || !email) {
		return res.status(400).send({ error: 'Missing nickname or email' })
	}
	User.findOne({ email }, (err, user) => {
		if (err) return res.status(500).send({ error: 'Database error' })
		if (!user) {
			const newUser = new User({ nickname, email })
			newUser.save((err, savedUser) => {
				if (err) return res.status(500).send({ error: 'Database error' })
				req.user = savedUser
				return next()
			})
		} else {
			req.user = user
			return next()
		}
	})
}

module.exports = createOrFindUser
