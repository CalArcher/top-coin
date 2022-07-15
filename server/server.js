// import modules / declaring variables
require('dotenv').config()
const { connectToDb, getDb } = require('./db')
const express = require('express')
const cors = require('cors')
const { ObjectId } = require('mongodb')

const coinDataRoute = require('./routes/CoinData')

const PORT = process.env.PORT 
const app = express()

// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

//routes
app.use(coinDataRoute)

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










