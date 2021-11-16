const mongoose = require('mongoose')

function saveNewFact(req, res, next) {
	const { factDetails } = req.body
	if (!factDetails) {
		return res.json({ error: 'Missing fact' })
	} else {
		const { factNumber, fact, length, path } = factDetails
		if (!fact || !factNumber || !length || !path) {
			return res.json({ error: 'Missing fact data' })
		} else {
			const newFact = {
				fact,
				factNumber,
				length,
				path,
			}
			req.newFact = newFact
			next()
		}
	}
}
module.exports = saveNewFact
