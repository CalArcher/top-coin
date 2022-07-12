import React from 'react'
import { Card } from 'react-bootstrap'
import { percentageFormatter } from '../utils'

export default function TopCoin({ name, percentChange }) {
  return (
    <Card style={{marginBottom: '2rem'}}>
      <Card.Title>
        <div>
          <span style={{
            fontSize: '1.75rem'
          }}>Today's Top Coin is <span style={{color: '#49D282'}}> { name } </span>, with a +{percentageFormatter.format(percentChange)} change</span>
        </div>
      </Card.Title>
    </Card>
  )
}
