// import modules / declaring variables
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const { MongoClient, ObjectId } = require('mongodb')

const port = process.env.PORT 
const app = express()

//db
let db,
  dbConnectionStr = process.env.DATABASE_URL
  dbName = 'top_coin'
  collection

MongoClient.connect(dbConnectionStr)
  .then(client => {
    db = client.db(dbName)
    collection = db.collection('coin_data')
    console.log('connected to DB')
  })


// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

// routes
const coindataRouter = require('./routes/coindata')
app.use('/coindata', coindataRouter)

// server
app.listen(port || 3000, () => {
  console.log('listening...')
})




//port
