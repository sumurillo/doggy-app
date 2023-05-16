const express = require('express')
const app = express()
const port = 3000
const dogsRouter = require('./routes/dogs')

// middleware
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use('/dogs', dogsRouter);

app.listen(port, () => {
  console.log('You are connected to the Port 3000')
})