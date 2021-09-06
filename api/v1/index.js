const bodyParser = require('body-parser')
const app = require('express')()
module.exports = { path: '/api', handler: app }

app.use(bodyParser.json())

app.post('/token', (req, res) => {
  res.json(req.body)
})
