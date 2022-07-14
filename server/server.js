// import modules / declaring variables
require('dotenv').config()
const { connectToDb, getDb } = require('./db')
const express = require('express')
const cors = require('cors')

const PORT = process.env.PORT 
const app = express()

//db connect
let db 
connectToDb((err) => {
  if(err){
    console.log(err)
  }else{
    app.listen(PORT || 3000, () => {
      console.log('listening...')
    })
    db = getDb()
  }
})

// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

// routes
app.get('/coindata', (req, res) => {
  let coins = []
  db.collection('coindata')
    .find()
    .forEach(coin => coins.push(coin))
    .then(() => {
      res.status(200).json(coins)
    })
    .catch((err) =>{
      res.status(500).json({error: 'could not fetch the documents', error: err})
    })
  console.log('get successful')
})

// server





