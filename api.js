const { Router } = require('express')
const router = Router()

router.post('/favorites', (req, res) => {
	console.log(req.body)
	res.send('add to favorites')
})

module.exports = router
