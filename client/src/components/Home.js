import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import CoinCard from './CoinCard'
import CoinLabels from './CoinLabels'
import TopCoin from './TopCoin'
import LoadingScreen from './LoadingScreen';
import useFetchData from './useFetchData';

function Home() {
 
  const { coinData, isLoading, currentNames } = useFetchData('http://localhost:3030/coindata')
  
  
  let coinNames = []
  let coinsUpper = []

  if(isLoading === false){
    for(let i=0; i<coinData.length; i++){
      coinNames.push(coinData[i].name)
      if(typeof coinData[i].name.charAt(0) === 'string'){
        coinData[i].name = coinData[i].name.charAt(0).toUpperCase() + coinData[i].name.slice(1)
      }
      coinsUpper.push(coinData[i].name)
    }
  }
 
  return (
    <div>
      {isLoading ? 
        <LoadingScreen></LoadingScreen>
      : 
      <Container className="my-4">
        <TopCoin number={0} name={coinData[0].name} dailyChange={coinData[0].percent_change_24h/100}></TopCoin> 
        <CoinLabels></CoinLabels>
        {coinData.map((coin, i) => {
          return <CoinCard key={i} number={i} name={coinsUpper[i]} currentPrice={coin.current_price[coin.current_price.length-1]} rank={coin.rank[coin.rank.length-1]} coinNames={coinNames} dailyChange={coin.percent_change_24h/100} weeklyChange={coin.percent_change_7d/100} coinLogo={coin.currencyLogo} ></CoinCard>
        })}
      </Container>
      }
    </div>
  )
}

export default Home



