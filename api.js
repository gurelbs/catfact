const { Router } = require('express')
const createOrFindUser = require('./controllers/createOrFindUser')
const saveNewFact = require('./controllers/saveNewFact')
const findUserAndPushFact = require('./controllers/findUserAndPushFact')
const getAllFavorite = require('./controllers/getAllUserFavourites')

const router = Router()

router
	.post('/users', createOrFindUser)
	.post('/favorites', saveNewFact, findUserAndPushFact)
	.get('/favorites', getAllFavorite)

module.exports = router
