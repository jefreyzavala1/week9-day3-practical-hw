const express = require('express')
const app = express()
const PORT = 3000

app.get('/greeting/', (req, res) => {
  res.send('<h1>Hello, Stranger</h1>')
})

app.get('/greeting/:name', (req, res) => {
  res.send(`<h2>What's up ${req.params.name}! It's so great to see you!.`)
})

app.get('/tip/:total/:tipPercentage', (req, res) => {
  const totalTip = req.params.total * (req.params.tipPercentage / 100)
  res.send(`<h2>Your tip amount is : ${totalTip}</h2>`)
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
