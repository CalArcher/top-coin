// import modules / declaring variables
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

const port = process.env.PORT 
const app = express()

// db
mongoose.connect('mongodb://localhost/coindata')
const db = mongoose.connection
db.on('error', (error) => {
  console.error(error)
})
db.once('open', () => console.log('server started'))

// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

// server
app.listen(port || 3000, () => {
  console.log('listening...')
})


// routes
const coinDataRouter = require('./routes/coindata')


//port
