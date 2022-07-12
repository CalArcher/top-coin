// import modules / declaring variables
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.PORT 
const app = express()

// db
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => {
  console.error(error)
})
db.once('open', () => console.log('connected to DB'))

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
