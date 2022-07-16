import React from 'react'
import { Card, Stack } from 'react-bootstrap'

export default function CoinLabels() {
  return (
    <Card style={{minWidth: '850px'}}>
      <Card.Body>
        <Stack class="mb-4" direction="horizontal" style={{
          display: 'grid',
          gridTemplateColumns: '45px 1fr 1fr 1fr 1fr 1fr',
          gap: '1rem',
        }}>
          <span border="1px solid red" class="me-auto">rank</span>
          <span border="1px solid red" class="me-auto">name</span>
          <span border="1px solid red" class="me-auto">price</span>
          <span border="1px solid red" class="me-auto">change %</span>
          <span border="1px solid red" class="me-auto">24h %</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
