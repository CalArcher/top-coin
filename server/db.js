require('dotenv').config()
const { MongoClient } = require('mongodb')

let dbConnection

function connectToDb(callback){
  MongoClient.connect(process.env.DATABASE_URL)
  .then((client) => {
    dbConnection = client.db('topcoin')
    console.log('connect success')
    return callback()
  })
  .catch(err => {
    console.log(err)
    return callback(err)
  })
}

function getDb(){
  return dbConnection
}

module.exports = { connectToDb, getDb }