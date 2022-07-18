require('dotenv').config()

// import modules / declaring variables
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const schedule = require('node-schedule')
const PORT = process.env.PORT 
const coinDataRoutes = require('./routes/CoinData')
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

// routes
app.use('/coindata', coinDataRoutes)

//db
mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log('connect success')
    app.listen(PORT, () => {
      console.log('listening on port', PORT)
      updateDb.compareAndUpdate()
    })    


  })
  .catch(err => {
    console.log(err)
  })



//Schedule DB update every 24 hours
// schedule.scheduleJob('* * * * *', fetchCurrent)









  





























//   async function fetchCurrent(){
//     return ['1', '3', '5']
//   }


//   let testing = []
//   async function test(){
//     let a = await fetchCurrent()
//     a.forEach(e => {
//       // testing[e] = Number(e) + 1
//       testing.push(e)
//     })
//     return testing
//   }

//   let tedsting = async () => {
//     let a = await test()
//     console.log(a)
//     return a

//   }

// console.log(tedsting())

