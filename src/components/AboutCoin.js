import React from 'react'
import Container from 'react-bootstrap/Container';
import PriceChart from './PriceChart'

export default function AboutCoin() {
  return (
    <Container>
      <PriceChart className="me-auto" name="Nano" ></PriceChart>
    </Container>
  )
}
