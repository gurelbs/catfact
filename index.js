require('dotenv').config()
require('./controllers/mongoose')()
const express = require('express')
const cors = require('cors')
const path = require('path')
const api = require('./api')
const app = express()
const PORT = process.env.PORT || 4000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api', api)
if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, 'build')))
	app.get('/*', function (req, res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'))
	})
}
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))
