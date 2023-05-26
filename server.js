const express = require('express')
const app = express()
const PORT = 3000

app.get('/greeting/',(req,res)=>{
   res.send(`<h1>Hello, Stranger</h1>`)
})

app.get('/greeting/:name',(req,res)=>{
    res.send(`<h2>What's up ${req.params.name}! It's so great to see you!`)
})


app.listen(PORT,()=>{
    console.log(`Listening on Port ${PORT}`)
})