const express = require('express')
const app = express()
const port = 9000
const axios = require('axios')

app.get('/sum/:first/:second', (req, res) => {
  axios.get(`http://calculator:9000/calculate/${req.params.first}/${req.params.second}`)
  .then(resp => resp.data)
  .then(resp => {
    res.json({
      from: 'greet',
      result: resp.result,
    })
  })
  .catch(console.error)
})

app.get('/greet/:name', (req, res) => {
  res.json({
    from: 'greet',
    message: `Hello ${req.params.name}`,
  })
})

app.listen(port, () => {
  console.log(`Greet service is starting on port: ${port}`)
})
