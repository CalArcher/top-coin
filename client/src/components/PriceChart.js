import React, { useContext } from 'react';
import { Context } from '../contexts/DataContext'
import LineChart from './LineChart';

export default function PriceChart( { name, number } ) {

  const [{ coinData, currentNames, sortState, setSortState, topCoin} , setState] = useContext(Context)

  
  let logoLink = coinData[number].currencyLogo
  let searchName = name.charAt(0).toLowerCase() + name.slice(1)
  let moreCoinInfo = `https://www.coingecko.com/en/coins/${searchName}`
  
  let nameNoDash = name.replaceAll('-', ' ')
  
  return (
    <div className='priceChartWrapper'>
      <div className='coinTitle'>
          <img className='noSelect' src={logoLink} alt='cryptocurrency logo'></img>
          <a className='noSelect' href={moreCoinInfo} target='_blank'>{nameNoDash}</a>
      </div>
      <div className='chartStyle'>
        <LineChart name={name} number={number}></LineChart>
      </div>
    </div>
  )
}
