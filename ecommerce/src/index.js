const express = require('express')
const { join } = require('path')
const bodyParser = require('body-parser')
const productsRouter = require('./routes/views/products')
const productsApiRouter = require('./routes/api/products')

// app
const app = express()

// middlewares
app.use(bodyParser.json())

// static files
app.use('/static', express.static(join(__dirname, 'public')))

// View engine setup
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'pug')

// routes
app.use('/products', productsRouter)
app.use('/api/products', productsApiRouter)

// redirect
app.get('/', function (req, res) {
  res.redirect('/products')
})

const server = app.listen(4000, () => {
  console.log(`Listening on http://localhost:${server.address().port}`)
})
