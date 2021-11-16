const { Router } = require('express')
const createOrFindUser = require('./controllers/createOrFindUser')
const saveNewFact = require('./controllers/saveNewFact')
const findUserAndPushFact = require('./controllers/findUserAndPushFact')
const router = Router()
const userFavorites = []

router.post('/users', createOrFindUser, (req, res) => {
	const { user } = req
	res.json(user)
})

router.post('/favorites', saveNewFact, findUserAndPushFact)

router.get('/favorites', (req, res) => {
	if (!userFavorites.length) return res.send({ error: 'No favorites found' })
	res.send(userFavorites)
})

module.exports = router
