import { Card, Stack, Button } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";
import Home from './Home'
import AboutCoin from './AboutCoin'
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'


export default function CoinCard({ number, name, currentPrice, dailyChange, weeklyChange, rank }) {

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
              <Link to='/about' style={{textDecoration: 'none'}}><h5 className='me-auto'>{name}</h5></Link>
              <span class="me-auto">{currencyFormatter.format(currentPrice)}</span>
              <span class="me-auto">{percentageFormatter.format(dailyChange)}</span>
              <span class="me-auto">{percentageFormatter.format(weeklyChange)}</span>
              <Link to='/about' style={{textDecoration: 'none'}}><Button variant="primary">Historical Data</Button></Link>
            </Stack>
          </Card.Body>

        </Card>
  )
}
