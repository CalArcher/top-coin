import { Card, Stack, Button, Image } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'
import React from 'react';


export default function CoinCard({ number, name, currentPrice, dailyChange, weeklyChange, rank, coinLogo }) {
  let lowName = name.toLowerCase()
  let link = `/about/${lowName}?q=${number}`
  return (
    <Card className='coinCard'>
      <Card.Body className='coinCardBody'>
        <Stack direction="horizontal" className='coinCardStack'>
          <h5 className="coinInfoHeading">{rank}</h5>
          <div className='nameStyle'>
            <Link to={link} number={number} className='customLinks coinTitleImg'>
              <Image className='iconStyle hover-shadow' src={coinLogo} alt={`${name} logo`}></Image>
              <h5 className='coinInfoHeading'>{name}</h5>
            </Link>
          </div>
          <span>{currencyFormatter.format(currentPrice)}</span>
          <span>{percentageFormatter.format(dailyChange)}</span>
          <span>{percentageFormatter.format(weeklyChange)}</span>
          <Link to={link} style={{textDecoration: 'none'}}><Button variant="primary">Historical Data</Button></Link>
        </Stack>
      </Card.Body>
    </Card>
  )
}
