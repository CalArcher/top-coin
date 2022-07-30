import { Card, Stack, Button, Image } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'
import React from 'react';



export default function CoinCard({ number, name, currentPrice, dailyChange, weeklyChange, rank, coinLogo, coinNames }) {
  
  let link = `/about/${name}?q=${number}`

  return (
      <Card id='coinCard'>
        <Card.Body>
          <Stack direction="horizontal" id='coinCardStack'>
            <h5 className="coinInfoHeading">{rank}</h5>
            <Link to={link} number={number} id='nameStyle'>
              <Image id='iconStyle' className="hover-shadow" src={coinLogo}></Image>
              <h5 className='coinInfoHeading'>{name}</h5>
            </Link>
            <span>{currencyFormatter.format(currentPrice)}</span>
            <span>{percentageFormatter.format(dailyChange)}</span>
            <span>{percentageFormatter.format(weeklyChange)}</span>
            <Link to={`/about/${name}?q=${number}`} style={{textDecoration: 'none'}}><Button variant="primary">Historical Data</Button></Link>
          </Stack>
        </Card.Body>
      </Card>
  )
}
