const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Dog = require('../models/dog')

async function main() {
  await mongoose.connect('mongodb+srv://sumireohana:StNh3PoGdeOrcT8V@cluster0.q2hez7m.mongodb.net/doggy-app?retryWrites=true&w=majority');
  console.log('Connected to the MongoDB Atlas');
}


main().catch(err => console.log(err));

// GET all dogs
router.get('/', async (req, res) => {
  try {
    let allDogs = await Dog.find({});
    res.json(allDogs)
  } catch {
    res.json({ msg: 'there was a problem getting all the dogs' });
  }
  res.send('Hello World!')
});

// POST create a dog
router.post('/', async (req, res) => {
  try {
    let newDog = await Dog.create(req.body)
    res.json(newDog)
  } catch {
    res.json({ msg: 'there was an error'})
  }
})

// GET one dog (SHOW)
router.get('/:id', async (req, res) => {
  try {
    let dog = await Dog.findById(req.params.id)
    res.json(dog)
  } catch {
    res.json({ msg: 'there was an error getting your dog'})
  }
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