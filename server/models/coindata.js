const mongoose = require('mongoose')



const coindataSchema = new mongoose.Schema({
    name: {
      type: String,
      required: false
    },
    rank: {
      type: Array,
      required: false
    },
    current_price: {
      type: Array,
      required: false
    },
    percent_change_24h: {
      type: Number,
      required: false
    },
    percent_change_7d: {
      type: Number,
      required: false
    },
    percent_change_30d: {
      type: Number,
      required: false
    },
    percent_change_1y:{
      type: Number,
      required: false
    },
    currencyLogo: {
      type: String,
      required: false
    },
    date: {
      type: Array,
      required: false
    }
})

module.exports = mongoose.model('coinData', coindataSchema)