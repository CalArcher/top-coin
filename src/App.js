import React from 'react';
import Container from 'react-bootstrap/Container';
import CoinCard from './components/CoinCard'
import CoinLabels from './components/CoinLabels'
import TopCoin from './components/TopCoin'
import AboutCoin from './components/AboutCoin'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'



function App() {
  return (
    <Router>
      <Container className="my-4">
        <TopCoin name="Nano" percentChange="0.11491"></TopCoin>
        <CoinLabels></CoinLabels>
        <CoinCard rank ="1" name="Nano" currentPrice={15.337} percentChange={0.11491} dailyChange={.039}></CoinCard>
        <CoinCard rank ="2" name="Cardano" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="3" name="Coin 3" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="4" name="Coin 4" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="5" name="Coin 5" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="6" name="Coin 6" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="7" name="Coin 7" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="8" name="Coin 8" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="9" name="Coin 9" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        <CoinCard rank ="10" name="Coin 10" currentPrice={1.537} percentChange={0.09891} dailyChange={.021}></CoinCard>
        {/* <AboutCoin></AboutCoin> */}
        {/* <Route exact path="/about"></Route> */}
      </Container>
    </Router>
  

  )
}

export default App
