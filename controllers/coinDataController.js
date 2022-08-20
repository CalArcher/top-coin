const CoinData = require('../models/coinDataModel')
const mongoose = require('mongoose')

//Get
const getCoinData = async (req, res) => {
  try {
    const coinData = await CoinData.find({}).sort({ updatedAt: -1 })
    res.status(200).json(coinData)
  } catch (err) {
    console.log(err)
    res.status(500).json({ error: 'could not fetch the documents', error: err.message })
  }
}

//Post
const createCoinData = async (req, res) => {
  const coin = req.body
  try{
    const coinData = await CoinData.create(coin)
    res.status(201).json(coinData)
  } catch(err) {
    console.log(err)
    res.status(500).json({ error: err.message, message: 'could not create new document' })
  }
}

//Update
const updateCoinData = async (req, res) => {
  const updates = req.body
  const id = req.params.id
  try{
    if(mongoose.Types.ObjectId.isValid(id)){
      const coinData = await CoinData.findOneAndUpdate
      ({_id: id}, updates)

      if(!CoinData){
        return res.status(404).json({
          error: 'no such document'
        })
      }
      res.status(200).json(updates)
    } else {
      res.status(404).json({
        error: 'not a valid document id'
      })
    }
  } catch(err) {
    res.status(500).json({
      error: err.message,
      message: 'could not update the document'
    })
  }
}

module.exports = {
  getCoinData,
  createCoinData,
  updateCoinData
}



//Do not need to get a specific id for my api, but this was built in case I change functionality later. 

// const getOneCoinData = async (req,res) => {
//   const id = req.params
//   try{
//     if(mongoose.Types.ObjectId.isValid(id)){

//       const coinData = await CoinData.findById(id)
//       if(!CoinData){
//         return res.status(404).json({
//           error: 'no such document'
//         })
//       }

//       res.status(200).json(coinData)
//     } else {
//       res.status(404).json({
//         error: 'not a valid document id'
//       })
//     }
    
//   } catch(err) {
//     res.status(500).json({
//       error: err.message,
//       message: 'could find the document'
//     })
//   }

// }



//Do not need delete for my api, but this was built in case I change functionality later. 

// const deleteOneCoinData = async (req, res) => {
//   const id = req.params

//   try{
//     if(mongoose.Types.ObjectId.isValid(id)){
//       const coinData = await CoinData.findOneAndDelete({_id: id}, coinData)
      
//       if(!coinData){
//         return res.status(404).json({
//           error: 'no such document'
//         })
//       }
//       res.status(200).json(coinData)
//     }else{
//       return res.status(404).json({
//         error: 'no such document'
//       })
//     }

//   } catch(err) {
//     res.status(500).json({
//       error: err.message,
//       message: 'could delete the document'
//     })
//   }
// }