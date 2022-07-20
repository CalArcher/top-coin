import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import CoinCard from './CoinCard'
import CoinLabels from './CoinLabels'
import TopCoin from './TopCoin'
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'



function Home() {
  const [coins, setCoinData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3030/coindata')
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        console.log('AAA', data.data.slice(0,10))
        setCoinData(coinDataSorted)
        setLoading(false)
      })
      .catch(e => console.log(e))

  }, [])
  console.log(coins)
  
  return (
    <div>
      {isLoading ? <span className='col-md-6'>Loading</span> : 
        <Container className="my-4">
        <TopCoin name={coins[0].name} dailyChange={coins[0].percent_change_24h/100}></TopCoin> 
        <CoinLabels></CoinLabels>
        {coins.map((coin, i) => {
          return <CoinCard key={i} number={i} name={coin.name} currentPrice={coin.current_price[coin.current_price.length-1]} rank={coin.rank[coin.rank.length-1]} dailyChange={coin.percent_change_24h/100} weeklyChange={coin.percent_change_7d/100} ></CoinCard>
        })}
      </Container>
      }
      
    </div>
      
  )
}

export default Home








// <Container className="my-4">
// <TopCoin name="Nano" percentChange="0.11491"></TopCoin>
// <CoinLabels></CoinLabels>
// <CoinCard rank ="1" name="Nano" currentPrice={15.337} percentChange={0.11491} dailyChange={.039}></CoinCard>
// <CoinCard rank ="2" name="Cardano" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="3" name="Coin 3" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="4" name="Coin 4" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="5" name="Coin 5" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="6" name="Coin 6" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="7" name="Coin 7" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="8" name="Coin 8" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="9" name="Coin 9" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// <CoinCard rank ="10" name="Coin 10" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
// </Container>