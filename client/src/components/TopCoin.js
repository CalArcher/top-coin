import React from 'react'
import { Card } from 'react-bootstrap'
import { percentageFormatter } from '../utils'
import { Link } from 'react-router-dom'

export default function TopCoin({ number, name, dailyChange }) {
  return (
    <div style={{marginBottom: '2rem'}}>
        <div>
          <span style={{
            fontSize: '1.75rem'
          }}>Today's top coin is <Link style={{textDecoration: 'none'}} to={`/about/${name}?q=${number}`} number={number}><span style={{color: '#49D282'}}> { name } </span></Link>, and it's up {percentageFormatter.format(dailyChange)} in the past 24 hours</span>
        </div>
    </div>
  )
}
