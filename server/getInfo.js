//TODO 
//needs array of all mongodb coin objects
//check if each current top 10 exist in object
//if one exists, update daysInTop10 value += 1
//if one doesnt exist, add it as a new coin object and set its daysInTop10 value to 1

require('dotenv').config()


class BuildData{
  constructor(){
    this.name
    this.yearToDate
    this.currentPrice
    this.rank
    this.logo
    this.price_change_24h
    this.price_change_7d
    this.price_change_30d
    this.price_change_1yr
    this.price_change_YTD
  }
  // async existingData(){
  //   let url = 'myDBurl' // grab from .env file
  // }

  handleErr(err){
    console.log(err)
    let res = new Response(
      JSON.stringify({
        code: 400,
        message: 'network error'
      })
    )
    return res
  }

  async getExistingData(){
    let existingData
    let myDbUrl = process.env.DATABASE_URL

    
  }

  async getData(){
    let newObjs = []
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y'
    
    let data = await (await fetch(url).catch(this.handleErr)).json()
    if(data.code && data.code === 400){
      return 'hello';
    }

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
  }

  async checkExistingData(){
    let newObjs = await this.getData()


    console.log(newObjs)
  }
 


}


let generateApiData = new BuildData()

generateApiData.checkExistingData()
