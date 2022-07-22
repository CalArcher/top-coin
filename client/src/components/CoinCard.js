import { Card, Stack, Button, Image } from "react-bootstrap";
import { currencyFormatter, percentageFormatter } from "../utils";
import { BrowserRouter as Router, Routes, Switch, Route, Link, Navigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios'



export default function CoinCard({ number, name, currentPrice, dailyChange, weeklyChange, rank, coinLogo }) {
  
  const stackStyle = {
    display: 'grid',
    gridTemplateColumns: '50px 1.75fr 1fr .9fr .9fr 1.1fr',
    gap: '1rem'
  }
  const imageStyle = {
    marginRight: '5px',
    width: '20px',
    height: '20px'
  }
  const nameStyle = {
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none'
  }
  return (
      <Card style={{minWidth: '850px'}}>
        <Card.Body>
          <Stack class="mb-4" direction="horizontal" style={stackStyle}>
            <h5 style={{alignContent: 'center', width: '100%'}} className='me-auto'>{rank}</h5>
            <Link to={`/about/${name}?q=${number}`} number={number} style={nameStyle}><Image style={imageStyle} className="hover-shadow" src={coinLogo}></Image><h5 className='me-auto'>{name}</h5></Link>
            <span class="me-auto">{currencyFormatter.format(currentPrice)}</span>
            <span class="me-auto">{percentageFormatter.format(dailyChange)}</span>
            <span class="me-auto">{percentageFormatter.format(weeklyChange)}</span>
            <Link to={`/about/${name}?q=${number}`} style={{textDecoration: 'none'}}><Button variant="primary">Historical Data</Button></Link>
          </Stack>
        </Card.Body>
      </Card>
  )
}
