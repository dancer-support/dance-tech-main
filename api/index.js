const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send(`HelloWorld${req.params}`)
})

module.exports = {
  path: '/api/',
  handler: app
}
