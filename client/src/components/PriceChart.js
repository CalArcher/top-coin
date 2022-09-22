/** @format */

import React, { useContext } from 'react'
import { Context } from '../contexts/DataContext'
import LineChart from './LineChart'
import NotFound from './NotFound'

export default function PriceChart({ name, number }) {
  const [{ coinData }] = useContext(Context)

  //handles number prop being passed in as null or undefined
  if (!number) {
    return <NotFound />
  }

  const logoLink = coinData[number].currencyLogo
  const searchName = name.toLowerCase().replaceAll(' ', '-')
  const moreCoinInfo = `https://www.coingecko.com/en/coins/${searchName}`
  const nameNoDash = formatName(name)

  return (
    <div className="priceChartWrapper">
      <div className="coinTitle">
        <img className="noSelect" src={logoLink} alt="cryptocurrency logo"></img>
        <a className="noSelect" href={moreCoinInfo} target="_blank" rel="noreferrer">
          {nameNoDash}
        </a>
      </div>
      <span className="coinInfoSpan">{nameNoDash}'s performance history while ranked in the top 10 coins of the day</span>
      <div className="chartStyle">
        <LineChart name={name} number={number}></LineChart>
      </div>
    </div>
  )
}

//turns coin's name from format xxx-xxx to Xxx Xxx
function formatName(coinId) {
  let idArray = coinId.charAt(0).toUpperCase() + coinId.slice(1)
  idArray = idArray.split('')
  for (let i = 0; i < idArray.length; i++) {
    if (idArray[i] === '-') {
      idArray[i] = ' '
      idArray[i + 1] = idArray[i + 1].toUpperCase()
    }
  }
  return idArray.join('')
}
