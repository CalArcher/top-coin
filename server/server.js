// import modules
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv').config()

const port = process.env.PORT || 8000

// app
const app = express()

// server
app.listen(port, () => {
  console.log('listening...')
})

// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

// db
mongoose.connect('mongodb://localhost/coindata')
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('server started'))


// routes



//port
