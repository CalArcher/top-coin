import React, { useContext } from 'react'
import { Context } from '../contexts/DataContext'
import LineChart from './LineChart'
import NotFound from './NotFound'

export default function PriceChart({ name, number }) {
  const [{ coinData, currentNames, sortState, setSortState, topCoin }, setState] = useContext(Context)

  //handles number prop being passed in as null or undefined
  if (!number) {
    return <NotFound />
  }

  let logoLink = coinData[number].currencyLogo
  let searchName = name.toLowerCase().replaceAll(' ', '-')
  let moreCoinInfo = `https://www.coingecko.com/en/coins/${searchName}`
  let nameNoDash = formatName(name)

  return (
    <div className="priceChartWrapper">
      <div className="coinTitle">
        <img className="noSelect" src={logoLink} alt="cryptocurrency logo"></img>
        <a className="noSelect" href={moreCoinInfo} target="_blank">
          {nameNoDash}
        </a>
      </div>
      <div className="chartStyle">
        <LineChart name={name} number={number}></LineChart>
      </div>
    </div>
  )
}


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