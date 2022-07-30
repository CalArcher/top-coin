import React from 'react'
import { percentageFormatter } from '../utils'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function TopCoin({ number, name, dailyChange }) {
  return (
    <div className='topCoinTitle'>
        <div>
          <h2 id='topCoinText'>Today's top coin is <Link className='customLinks' to={`/about/${name}?q=${number}`} number={number}><span className='successGreen' > { name } </span></Link>, and it's up {percentageFormatter.format(dailyChange)} in the past 24 hours</h2>
        </div>
    </div>
  )
}
