const express = require('express')
const router = express.Router()
const coindata = require('../models/coindata')


// router.get('/', async (req, res) => {
//   try{
//     const coindata = 
//   } catch {

//   }
// })

router.get('/:id', (req, res) => {
  res.send(req.params.id)
})

router.post('/:id', (req, res) => {

})

router.patch('/:id', (req, res) => {
  
})

router.delete('/:id', (req, res) => {
  
})

module.exports = router