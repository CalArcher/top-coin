import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
import CoinCard from './CoinCard'
import CoinLabels from './CoinLabels'
import TopCoin from './TopCoin'
import { Context } from '../contexts/DataContext'

function Home() {
  const [{ coinData, currentNames, sortState, setSortState, topCoin }, setState] = useContext(Context)

  let coinsUpper = currentNames

  return (
    <Container className="homeCont">
      <TopCoin number={0} name={topCoin.name} dailyChange={topCoin.percent_change_24h / 100}></TopCoin>
      <CoinLabels></CoinLabels>
      {coinData.map((coin, i) => {
        return (
          <CoinCard
            key={i}
            number={i}
            name={coinsUpper[i]}
            currentPrice={coin.current_price[coin.current_price.length - 1]}
            rank={coin.rank[coin.rank.length - 1]}
            dailyChange={coin.percent_change_24h / 100}
            weeklyChange={coin.percent_change_7d / 100}
            coinLogo={coin.currencyLogo}
          ></CoinCard>
        )
      })}
    </Container>
  )
}

export default Home;
