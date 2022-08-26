/** @format */

const schedule = require('node-schedule')

class UpdateData {
  constructor() {
    this.currentCoinData
  }

  async getNewData() {
    const url =
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y'
    const newObjs = []

    try {
      const data = await (await fetch(url)).json()
      const top10Today = await data
        .sort((a, b) => b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency)
        .slice(0, 10)

      for (let i = 0; i < top10Today.length; i++) {
        const date = top10Today[i].last_updated.slice(0, 10)
        const changeOneYear =
          top10Today[i].price_change_percentage_1y_in_currency === null ? -9999 : top10Today[i].price_change_percentage_1y_in_currency
        const changeOneMonth =
          top10Today[i].price_change_percentage_30d_in_currency === null ? -9999 : top10Today[i].price_change_percentage_30d_in_currency
        newObjs.push({
          name: top10Today[i].id,
          rank: top10Today[i].market_cap_rank,
          current_price: top10Today[i].current_price,
          percent_change_24h: top10Today[i].price_change_percentage_24h_in_currency,
          percent_change_7d: top10Today[i].price_change_percentage_7d_in_currency,
          percent_change_30d: changeOneMonth,
          percent_change_1y: changeOneYear,
          currencyLogo: top10Today[i].image,
          date: date
        })
      }
      return newObjs
    } catch (err) {
      console.log(err)
    }
  }

  async fetchCurrent() {
    const url = 'http://localhost:3030/api/coindata'
    try {
      const res = await fetch(url)
      const data = await res.json()
      return data
    } catch (error) {
      console.log(error)
    }
  }

  async compareAndUpdate() {
    const currentData = await this.fetchCurrent()
    const newData = await this.getNewData()

    let update = {}
    let updateId = ''
    let newCoin = {}
    let currentObj = {}

    for (let i = 0; i < currentData.length; i++) {
      let name = currentData[i].name
      currentObj[name] = currentData[i]
    }
    for (let i = 0; i < newData.length; i++) {
      let name = newData[i].name

      if (currentObj[name]) {
        let oldRanks = currentObj[name].rank
        let newRank = newData[i].rank
        oldRanks.push(newRank)

        let oldPrices = currentObj[name].current_price
        let newPrice = newData[i].current_price
        oldPrices.push(newPrice)

        let oldDates = currentObj[name].date
        let newDate = newData[i].date
        oldDates.push(newDate)

        updateId = currentObj[name]._id
        update = {
          rank: oldRanks,
          current_price: oldPrices,
          percent_change_24h: newData[i].percent_change_24h,
          percent_change_7d: newData[i].percent_change_7d,
          percent_change_30d: newData[i].percent_change_30d,
          percent_change_1y: newData[i].percent_change_1y,
          date: oldDates
        }
        const updateURL = `http://localhost:3030/api/coindata/${updateId}`
        try {
          fetch(updateURL, {
            method: 'PATCH',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(update)
          }).then(res => {
            return res.json()
          })
        } catch (e) {
          console.log('line 109')
          console.log(e)
        }
      } else {
        const postURL = 'http://localhost:3030/api/coindata'
        newCoin = newData[i]
        try {
          fetch(postURL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoin)
          }).then(res => {
            return res.json()
          })
        } catch (e) {
          console.log(e)
        }
      }
    }
  }

  //Schedule DB update every 24 hours at 1am
  scheduleRun() {
    try {
      schedule.scheduleJob('0 1 * * *', async () => {
        this.compareAndUpdate()
      })
    } catch (error) {
      console.log(error)
    }
  }
}

const generateApiData = new UpdateData()

module.exports = generateApiData
