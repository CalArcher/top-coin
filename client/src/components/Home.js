import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import CoinCard from './CoinCard'
import CoinLabels from './CoinLabels'
import ModeToggle from './ModeToggle';
import TopCoin from './TopCoin'
import { Context } from '../contexts/DataContext'
import { ThemeContext } from '../contexts/ThemeContextSet'

//TODO every time db is updated, update homepage

function Home() {
  const [{ coinDataSorted }, setState] = useContext(Context)
  const [theme, toggleTheme] = useContext(ThemeContext)
  let coinNames = []
  let coinsUpper = []

  //builds coinNames list and coinNames uppercase list
  for(let i=0; i<coinDataSorted.length; i++){
    coinNames.push(coinDataSorted[i].name)
    if(typeof coinDataSorted[i].name.charAt(0) === 'string'){
      coinDataSorted[i].name = coinDataSorted[i].name.charAt(0).toUpperCase() + coinDataSorted[i].name.slice(1)
    }
    coinsUpper.push(coinDataSorted[i].name)
  }
 
  let mode = theme === 'light' ? 'Light Mode' : 'Dark Mode'

  return (
    <div>
      <div className='switchStyle'>
        <ModeToggle></ModeToggle>
        <span>{mode}</span>
      </div>
    <Container>
      <TopCoin number={0} name={coinDataSorted[0].name} dailyChange={coinDataSorted[0].percent_change_24h/100}></TopCoin> 
      <CoinLabels></CoinLabels>
      {coinDataSorted.map((coin, i) => {
        return <CoinCard key={i} number={i} name={coinsUpper[i]} currentPrice={coin.current_price[coin.current_price.length-1]} rank={coin.rank[coin.rank.length-1]} coinNames={coinNames} dailyChange={coin.percent_change_24h/100} weeklyChange={coin.percent_change_7d/100} coinLogo={coin.currencyLogo} ></CoinCard>
        })}
      </Container>
    </div>
 
  )
}

export default Home



