import React from 'react'
import { Card, Stack } from 'react-bootstrap'

export default function CoinLabels() {
  return (
    <Card style={{minWidth: '850px'}}>
      <Card.Body>
        <Stack class="mb-4" direction="horizontal" style={{
          display: 'grid',
          gridTemplateColumns: '50px 1.75fr 1fr .9fr .9fr 1.1fr',
          gap: '1rem',
        }}>
          <span border="1px solid red" class="me-auto">rank</span>
          <span border="1px solid red" class="me-auto">name</span>
          <span border="1px solid red" class="me-auto">price</span>
          <span border="1px solid red" class="me-auto">24h%</span>
          <span border="1px solid red" class="me-auto">7d%</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
