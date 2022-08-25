/** @format */

import React, { useContext } from 'react'
import { Container } from 'react-bootstrap'
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
    <Container className="homeCont">
      <TopCoin number={0} name={topCoin.name} dailyChange={topCoin.percent_change_24h / 100}></TopCoin>
      <Table></Table>
    </Container>
  )
}

export default Home
