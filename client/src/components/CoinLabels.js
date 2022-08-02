import React from 'react'
import { Card, Stack } from 'react-bootstrap'

export default function CoinLabels() {
  let stackStyle = {
    display: 'grid',
    gridTemplateColumns: '50px 1.75fr 1fr .9fr .9fr 1.1fr',
    gap: '1rem'
  }

  return (
    <Card id='coinLabelStyle'>
      <Card.Body>
        <Stack class="mb-4" direction="horizontal" style={stackStyle}>
          <span border="1px solid red" class="me-auto">Rank</span>
          <span border="1px solid red" class="me-auto">Name</span>
          <span border="1px solid red" class="me-auto">Price</span>
          <span border="1px solid red" class="me-auto">24h%</span>
          <span border="1px solid red" class="me-auto">7d%</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
