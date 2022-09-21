/** @format */

import React, { useContext } from 'react'
import TopCoin from './TopCoin'
import Table from './Table'
import NotFound from './NotFound'
import { Context } from '../contexts/DataContext'

function Home() {
  const [{ coinData, topCoin }] = useContext(Context)

  //handles database being empty crashing the site
  if (!coinData) {
    return <NotFound />
  }

  return (
    <div className="homeInfoContainer">
      <TopCoin number={0} name={topCoin.name} dailyChange={topCoin.percent_change_24h / 100}></TopCoin>
      <Table className="coinTable"></Table>
    </div>
  )
}

export default Home
