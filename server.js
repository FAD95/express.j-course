const express = require('express')
const app = express()

app.get('/', (req, res, next) => {
  res.send({ hello: 'world' })
})

const server = app.listen(4000, () => {
  console.log(`Listening on http://localhost:${server.address().port}`)
})
