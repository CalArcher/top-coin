require('dotenv').config()

// import modules / declaring variables
const express = require('express')
const axios = require('axios')
const mongoose = require('mongoose')
const cors = require('cors')
const schedule = require('node-schedule')
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

//db
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



//Schedule DB update every 24 hours
// schedule.scheduleJob('* * * * *', fetchCurrent)




class GetDbData{
  constructor(){
    this.currentCoinData
  }
  
  async fetchCurrent(){
    let url = 'http://localhost:3000/coindata'
    try{
      let data = await axios.get(url)
      console.log(data)
      return data
    } catch(error){
      console.log(error)
    }
  }
  
}

let newCoinData = new GetDbData()

newCoinData.fetchCurrent()

