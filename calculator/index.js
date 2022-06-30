const express = require('express')
const app = express()
const port = 9000

app.get('/calculate/:first/:second', (req, res) => {
  const first = parseInt(req.params.first)
  const second = parseInt(req.params.second)
  res.json({
    from: 'calculator',
    result: first + second,
  })
})

app.listen(port, () => {
  console.log(`Calculator service is starting on port: ${port}`)
})
