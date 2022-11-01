import express from 'express'
const app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(8080)
