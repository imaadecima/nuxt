const bodyParser = require('body-parser')
const Cookies = require('cookies')
const app = require('express')()
module.exports = { path: '/api', handler: app }

app.use(bodyParser.json())

app.post('/', (req, res) => {
  res.end('API Nuxt')
})

app.get('/token', (req, res) => {
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')
  res.json(token)
})

app.post('/token', (req, res) => {
  const cookies = new Cookies(req, res)

  cookies.set('token', 'Bearer TOKEN', {
    maxAge: 3600000 * 12,
    httpOnly: true // true by default
  })

  res.end('Token guardado')
})
