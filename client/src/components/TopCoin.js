import React from 'react'
import { Card } from 'react-bootstrap'
import { percentageFormatter } from '../utils'

export default function TopCoin({ name, dailyChange }) {
  return (
    <Card style={{marginBottom: '2rem'}}>
      <Card.Title>
        <div>
          <span style={{
            fontSize: '1.75rem'
          }}>Today's top coin is <span style={{color: '#49D282'}}> { name } </span>, and it's up {percentageFormatter.format(dailyChange)}</span>
        </div>
      </Card.Title>
    </Card>
  )
}
