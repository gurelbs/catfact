const { Router } = require('express')
const router = Router()
const userFavorites = []
router.post('/favorites', (req, res) => {
	const { fact } = req.body
	if (!fact) return res.send({ error: 'No fact provided' })
	if (userFavorites.find(f => f.fact === fact.fact)) {
		return res.send({ warn: `fact #${fact.factNumber} already exists in your favorites!` })
	}
	userFavorites.push(fact)
	res.send({ success: `fact #${fact.factNumber} successfully added to your favorites!` })
})

router.get('/favorites', (req, res) => {
	if (!userFavorites.length) return res.send({ error: 'No favorites found' })
	res.send(userFavorites)
})

module.exports = router
