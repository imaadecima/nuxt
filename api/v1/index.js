// const bodyParser = require('body-parser')
const Cookies = require('cookies')
const app = require('express')()
module.exports = { path: '/api', handler: app }

// app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.end('API Nuxt')
})

app.get('/token', (req, res) => {
  const cookies = new Cookies(req, res)
  const token = cookies.get('token')

  if (token) {
    res.statusCode = 200
    res.json({ token })
  } else {
    res.statusCode = 403
    res.json({ token: null })
  }
})

app.post('/token', (req, res) => {
  const cookies = new Cookies(req, res)

  const { token } = req.body

  if (token) {
    cookies.set('token', token, {
      maxAge: 3600000 * 12,
      httpOnly: true
    })

    res.statusCode = 200
    res.end('Token saved')
  } else {
    res.statusCode = 400
    res.end('ERROR 400: Bad Request')
  }
})
