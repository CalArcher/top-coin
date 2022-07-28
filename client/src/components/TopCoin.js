import React from 'react'
import { percentageFormatter } from '../utils'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'

export default function TopCoin({ number, name, dailyChange }) {
  return (
    <div className='topCoinTitle'>
        <div>
          <span style={{
            fontSize: '1.75rem'
          }}>Today's top coin is <Link className='customLinks' to={`/about/${name}?q=${number}`} number={number}><span style={{color: '#49D282'}}> { name } </span></Link>, and it's up {percentageFormatter.format(dailyChange)} in the past 24 hours</span>
        </div>
    </div>
  )
}
