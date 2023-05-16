const express = require('express')
const router = express.Router()

// GET all dogs
router.get('/', (req, res) => {
  res.send('Hello World!')
})

// POST create a dog
router.post('/', (req, res) => {
  res.send('This is the POST route for dogs')
})

// GET one dog (SHOW)
router.get('/:id', (req, res) => {
  res.send('This is the GET route for one dog')
})

// PUT one dog (UPDATE)
router.put('/:id', (req, res) => {
  res.send('This is the PUT route for one dog')
})

// DELETE one dog
router.delete('/:id', (req, res) => {
  res.send('This is the DELETE route for one dog')
})

module.exports = router