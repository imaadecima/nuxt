const express = require('express')

// Create express instance
const app = express()

// Import API Routes
app.use('/test', (req, res) => {
  res.end('Test API!')
})
// Mock Users
const usersData = [
  { name: 'Alexandre' },
  { name: 'Pooya' },
  { name: 'Sébastien' }
]

/* GET users listing. */
app.get('/users', function (req, res, next) {
  res.json(usersData)
})

/* GET user by ID. */
app.get('/users/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  if (id >= 0 && id < usersData.length) {
    res.json(usersData[id])
  } else {
    res.sendStatus(404)
  }
})

// Export express app
module.exports = app

// Start standalone server if directly running
if (require.main === module) {
  const port = process.env.PORT || 3001
  app.listen(port, () => {
    // eslint-disable-next-line no-console
    console.log(`API server listening on port ${port}`)
  })
}
