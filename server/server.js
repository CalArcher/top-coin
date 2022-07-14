// import modules / declaring variables
require('dotenv').config()
const { connectToDb, getDb } = require('./db')
const express = require('express')
const cors = require('cors')
const { ObjectId } = require('mongodb')

const PORT = process.env.PORT 
const app = express()

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

// middleware
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.use(cors())

// routes
app.get('/coindata', (req, res) => {
  let coins = []
  // let pages = req.query.page
  // let resultsPerPage = 1

  db.collection('coindata')
    .find()
    // .skip(pages * resultsPerPage)
    // .limit(resultsPerPage)
    .forEach(coin => coins.push(coin))
    .then(() => {
      res.status(200).json(coins)
    })
    .catch((err) =>{
      res.status(500).json({error: 'could not fetch the documents', error: err})
    })
  console.log('get successful')
})

app.get('/coindata/:id', (req, res) => {
  const id = req.params.id

  if(ObjectId.isValid(id)){
    db.collection('coindata')
    .findOne({ _id: ObjectId(id) })
    .then(doc => {
      res.status(200).json(doc)
    })
    .catch(err => {
      res.status(500).json({ error: err, message: 'could not find document' })
    })
  } else {
    res.status(404).json({ code: 404, error: 'not a valid id' })
  }
})


app.post('/coindata', (req, res) => {
  const coin = req.body

  db.collection('coindata')
    .insertOne(coin)
    .then(result => {
      res.status(200).json({result})
    })
    .catch(err => {
      res.status(500).json({ error: err, message: 'could not create new document' })
    })
})

app.delete('/coindata/:id', (req, res) => {
  let id = req.params.id

  if(ObjectId.isValid(id)){
    db.collection('coindata')
      .deleteOne({ _id: ObjectId(id)})
      .then(result => {
        res.status(200).json(result)
      })
      .catch(err => {
        res.status(500).json({
          error: err,
          message: 'could not fetch the document'
        })
      })
  } else {
    res.status(404).json({
      error: 'not a valid document id'
    })
  }
})

app.patch('/coindata/:id', (req, res) => {
  const updates = req.body
  const id = req.params.id

  if(ObjectId.isValid(id)){
    db.collection('coindata')
    .updateOne({ _id: ObjectId(id) }, {$set: updates})
    .then(result => {
      res.status(200).json(result)
    })
    .catch(err => {
      res.status(500).json({
        error: err,
        message: 'could not update the document'
      })
    })
  } else {
    res.status(404).json({
      error: 'not a valid document id'
    })
  }
 
})

