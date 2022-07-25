import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import CoinCard from './CoinCard'
import CoinLabels from './CoinLabels'
import TopCoin from './TopCoin'
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'
import LoadingScreen from './LoadingScreen';

function Home() {
  const [coins, setCoinData] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    axios.get('http://localhost:3030/coindata')
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        setCoinData(coinDataSorted)
        setLoading(false)
      })
      .catch(e => console.log(e))
  }, [])
           
  let coinsUpper = []
  if(isLoading === false){
    for(let i=0; i<coins.length; i++){
      if(typeof coins[i].name.charAt(0) === 'string'){
        coins[i].name = coins[i].name.charAt(0).toUpperCase() + coins[i].name.slice(1)
      }
      coinsUpper.push(coins[i].name)
    }
  }
 
  return (
    <div>
      {isLoading ? 
        <LoadingScreen></LoadingScreen>
      : 
        <Container className="my-4">
        <TopCoin number={0} name={coins[0].name} dailyChange={coins[0].percent_change_24h/100}></TopCoin> 
        <CoinLabels></CoinLabels>
        {coins.map((coin, i) => {
          return <CoinCard key={i} number={i} name={coinsUpper[i]} currentPrice={coin.current_price[coin.current_price.length-1]} rank={coin.rank[coin.rank.length-1]} dailyChange={coin.percent_change_24h/100} weeklyChange={coin.percent_change_7d/100} coinLogo={coin.currencyLogo} ></CoinCard>
        })}
      </Container>
      }
    </div>
  )
}

export default Home



