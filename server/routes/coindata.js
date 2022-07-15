const express = require('express')
const router = express.Router()

const {
  getCoinData,
  createCoinData,
  updateCoinData,
} = require('../controllers/coinDataController')


//Get all coin data
router.get('/', getCoinData)

//Create a new coin data document
router.post('/', createCoinData)

//Update an existing coin data document
router.patch('/:id', updateCoinData)


module.exports = router