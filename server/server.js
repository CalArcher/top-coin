require('dotenv').config()

// import modules / declaring variables
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT 
const coinDataRoutes = require('./routes/CoinData')

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

// app.get('/hi', (req, res) => {
//   res.json({mssg: 'hello'})
// })

//Db
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('connect success')
    app.listen(PORT, () => {
      console.log('listening on port', PORT)
    })    
  })
  .catch(err => {
    console.log(err)
  })






