import React from 'react'
import Container from 'react-bootstrap/Container';
import PriceChart from './PriceChart'
import { useParams, useSearchParams } from 'react-router-dom';
import ModeToggle from './ModeToggle';


export default function AboutCoin() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  let q = searchParams.get('q')

  return (
    <div>
      <ModeToggle></ModeToggle>
      <Container>
        <PriceChart name={id} number={q} className="me-auto"></PriceChart>
      </Container>
    </div>
    
  )
}
