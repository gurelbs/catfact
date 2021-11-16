const mongoose = require('mongoose')
const { User } = require('../models/User')

async function findUserAndPushFact(req, res) {
	try {
		const { newFact } = req
		const { user } = req.body
		const userDetaild = await User.findOne({ _id: user._id })
		const factIsExist = userDetaild.favoritesFacts.find(
			fact => fact.fact === newFact.fact || fact.factNumber === newFact.factNumber
		)
		if (factIsExist) {
			return res.json({ error: 'Fact already exist' })
		}
		const userUpdated = await User.findOneAndUpdate(
			{ _id: user._id },
			{ $push: { favoritesFacts: newFact } },
			{ new: true }
		)
		console.log(userUpdated)
		return res.json({ success: 'Fact added to favorites' })
	} catch (error) {
		res.json({ error: 'Something went wrong' })
	}
}
module.exports = findUserAndPushFact
