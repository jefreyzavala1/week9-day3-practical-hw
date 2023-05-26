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

app.get('/magic/:question', (req, res) => {
  const magicEightBallAnswers = ['It is certain', 'It is decidedly so', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', "Don't count on it", 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful']

  const length = magicEightBallAnswers.length

  res.send(`<h1> You have asked the magic ball : ${req.params.question} </h1>
    <h1>The magic 8 ball says: ${magicEightBallAnswers[Math.floor(Math.random() * length)]}</h1>`)
})

// Fibonnaci
app.get('/fibonacci/:number', (req, res) => {
  const fibonacciNumbers = [0, 1, 1]
  let current = fibonacciNumbers[fibonacciNumbers.length - 1]
  let previous = fibonacciNumbers[fibonacciNumbers.length - 2]

  for (let i = fibonacciNumbers.length-1; i <= req.params.number; i++) {
    fibonacciNumbers.push(current + previous)
    current = fibonacciNumbers[fibonacciNumbers.length-1]
    previous = fibonacciNumbers[fibonacciNumbers.length - 2]
  }
  console.log(fibonacciNumbers)

  if (fibonacciNumbers.includes(Number(req.params.number))) {
    res.send('<h2>Very good. It is Fibonacci</h2>')
  } else {
    res.send('<h2>I can tell this is not a fibonacci number.</h2>')
  }
})

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`)
})
