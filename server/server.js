require('dotenv').config()

// import modules / declaring variables
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT 
const coinDataRoutes = require('./routes/CoinData')
let updateDb = require('./updateDb')
const schedule = require('node-schedule')

//app
const app = express()

// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method)
  next()
})
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

// routes
app.use('/coindata', coinDataRoutes)

//db
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('connect success')
    app.listen(PORT, () => {
      console.log('listening on port', PORT)
      //Schedule DB update every 24 hours
      updateDb.scheduleRun()
    })    
  })
  .catch(err => {
    console.log(err)
  })



// //Schedule DB update every 24 hours

