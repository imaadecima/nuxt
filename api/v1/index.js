const bodyParser = require('body-parser')
const Cookies = require('cookies')
const app = require('express')()
module.exports = { path: '/api', handler: app }

app.use(bodyParser.json())

app.post('/token', (req, res) => {
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')
  res.json(token)
})
