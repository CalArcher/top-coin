import { Card, Stack, Button } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'



export default function CoinCard({ number, name, currentPrice, dailyChange, weeklyChange, rank }) {
  // const [coins, setCoinData] = useState([])
  // const [isLoadingCard, setLoading] = useState(true)

  // useEffect(() => {
  //   axios.get('http://localhost:3030/coindata')
  //     .then(data => {
  //       let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
  //       setCoinData(coinDataSorted)
  //       setLoading(false)
  //     })
  //     .catch(e => console.log(e))

  // }, [])
  
  const stackStyle = {
    display: 'grid',
    gridTemplateColumns: '45px 1fr 1fr 1fr 1fr 1fr',
    gap: '1rem'
  }
  return (
      <Card style={{minWidth: '850px'}}>
        <Card.Body>
          <Stack class="mb-4" direction="horizontal" style={stackStyle}>
            <h5 style={{alignContent: 'center', width: '100%'}}className='me-auto'>{rank}</h5>
            <Link to={`/about/${name}?q=${number}`} number={number} style={{textDecoration: 'none'}}><h5 className='me-auto'>{name}</h5></Link>
            <span class="me-auto">{currencyFormatter.format(currentPrice)}</span>
            <span class="me-auto">{percentageFormatter.format(dailyChange)}</span>
            <span class="me-auto">{percentageFormatter.format(weeklyChange)}</span>
            <Link to={`/about/${name}?q=${number}`} style={{textDecoration: 'none'}}><Button variant="primary">Historical Data</Button></Link>
          </Stack>
        </Card.Body>
      </Card>
  )
}
