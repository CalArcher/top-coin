//TODO 
//needs array of all mongodb coin objects
//check if each current top 10 exist in object
//if one exists, update daysInTop10 value += 1
//if one doesnt exist, add it as a new coin object and set its daysInTop10 value to 1


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

  async getData(){
    let url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C30d%2C1y'
    
    let data = await (await (fetch(url))).json()
    let top10Today = await data.sort((a,b) => b.price_change_percentage_24h_in_currency - a.price_change_percentage_24h_in_currency).slice(0,10)

    console.log(top10Today)
    console.log(top10Today.length)
    
  }


}


let generateApiData = new BuildData()

generateApiData.getData()
