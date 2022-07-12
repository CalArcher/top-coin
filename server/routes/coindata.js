const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('Hello')
})

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