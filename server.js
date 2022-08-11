require('dotenv').config()

// import modules / declaring variables
const express = require('express')
const path = require('path')
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = process.env.PORT 
const coinDataRoutes = require('./routes/CoinData')
const compression = require('compression')
let updateDb = require('./updateDb')

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
app.use(compression())

// routes
app.use('/api/coindata', coinDataRoutes)

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

//serve build folder
// if(process.env.NODE_ENV === 'production'){
//   app.use(express.static(path.join(__dirname, '/client/build')))
  
//   app.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
//   })
// }
  