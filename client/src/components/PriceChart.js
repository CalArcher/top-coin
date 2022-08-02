import React, { useContext } from 'react';
import { Context } from '../contexts/DataContext'
import useMousePosition from '../hooks/useMousePosition';

import LineChart from './LineChart';

export default function PriceChart( { name, number } ) {

  const [{ coinDataSorted, currentNames }, setState] = useContext(Context)
  
  let logoLink = coinDataSorted[number].currencyLogo
  let searchName = name.charAt(0).toLowerCase() + name.slice(1)
  let moreCoinInfo = `https://www.coingecko.com/en/coins/${searchName}`
  

 
  // let chart = document.querySelector('#chartBoundary')
  // chart.addEventListener('mousemove', (e) => {
  //   console.log(e)
  // })

  return (
    <div className='priceChartWrapper'>
      <div className='coinTitle'>
          <img src={logoLink} alt='cryptocurrency logo'></img>
          <a href={moreCoinInfo} target='_blank'>{name}</a>
      </div>
      <div className='chartStyle'>
        <LineChart name={name} number={number}></LineChart>
      </div>
    </div>
  )
}
