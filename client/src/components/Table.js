/** @format */

import React, { useContext } from 'react'
import CoinCard from './CoinCard'
import CoinLabels from './CoinLabels'
import NotFound from './NotFound'
import { Context } from '../contexts/DataContext'

function Home() {
  const [{ coinData, currentNames }] = useContext(Context)

  //handles database being empty crashing the site
  if (!coinData) {
    return <NotFound />
  }

  return (
    <div className="tableCont">
      <div id="coinLabelDataCont">
        <CoinLabels id="coinTableLabels"></CoinLabels>
        {coinData.map((coin, i) => {
          return (
            <CoinCard
              className="coinTableDataStyle"
              key={i}
              number={i}
              name={currentNames[i]}
              currentPrice={coin.current_price[coin.current_price.length - 1]}
              rank={coin.rank[coin.rank.length - 1]}
              dailyChange={coin.percent_change_24h / 100}
              weeklyChange={coin.percent_change_7d / 100}
              coinLogo={coin.currencyLogo}
            ></CoinCard>
          )
        })}
      </div>
    </div>
  )
}

export default Home
