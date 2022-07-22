import React from 'react'
import { Card } from 'react-bootstrap'
import { percentageFormatter } from '../utils'
import { Link } from 'react-router-dom'


export default function TopCoin({ number, name, dailyChange }) {
  return (
    <Card style={{marginBottom: '2rem'}}>
      <Card.Title>
        <div>
        
          <span style={{
            fontSize: '1.75rem'
          }}>Today's top coin is <Link style={{textDecoration: 'none'}} to={`/about/${name}?q=${number}`} number={number}><span style={{color: '#49D282'}}> { name } </span></Link>, and it's up {percentageFormatter.format(dailyChange)}</span>
        </div>
      </Card.Title>
    </Card>
  )
}
