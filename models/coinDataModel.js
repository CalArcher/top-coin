const mongoose = require('mongoose')

const Schema = mongoose.Schema

const coinDataSchema = new Schema(
  {
    name: {
      type: String,
      required: false
    },
    rank: {
      type: Array,
      required: true
    },
    current_price: {
      type: Array,
      required: true
    },
    percent_change_24h: {
      type: Number,
      required: true
    },
    percent_change_7d: {
      type: Number,
      required: true
    },
    percent_change_30d: {
      type: Number,
      required: true
    },
    percent_change_1y: {
      type: Number,
      required: true
    },
    currencyLogo: {
      type: String,
      required: false
    },
    date: {
      type: Array,
      required: true
    }
  },
  { timestamps: true }
)




module.exports = mongoose.model('CoinData', coinDataSchema)


