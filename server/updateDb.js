require('dotenv').config()


class UpdateData{
  constructor(){
   this.currentCoinData
  }

  async getNewData(){
    let newObjs = []
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y'
    
    try{
      let data = await (await fetch(url)).json()

      let top10Today = await data.sort((a,b) => b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency).slice(0,10)
      
      for(let i = 0; i<top10Today.length; i++){
        let date = top10Today[i].last_updated.slice(0,10)
        newObjs.push(
          {
            name: top10Today[i].id,
            rank: top10Today[i].market_cap_rank,
            current_price: [top10Today[i].current_price],
            percent_change_24h: top10Today[i].price_change_percentage_24h_in_currency,
            percent_change_7d: top10Today[i].price_change_percentage_7d_in_currency,
            percent_change_30d: top10Today[i].price_change_percentage_30d_in_currency,
            percent_change_1y: top10Today[i].price_change_percentage_1y_in_currency,
            currencyLogo: top10Today[i].image,
            date: [date]
          }
        )
      }
      console.log(newObjs)
      return newObjs
    } catch(err){
      console.log(err)
    }
  }
  async fetchCurrent('http://localhost:3000/coindata'){
    let url = ''
    try{
      let data = await (await fetch(url)).json()
      console.log(data.slice(0,1))
      return data.slice(1,2)
    } catch(err){
      console.log(err)
    }
  }

}




let generateApiData = new UpdateData()

generateApiData.checkExistingData()
