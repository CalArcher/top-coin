import React from 'react'
import Container from 'react-bootstrap/Container'
import PriceChart from './PriceChart'
import { useParams, useSearchParams } from 'react-router-dom'

export default function AboutCoin() {
  const { id } = useParams()
  let idUp = id.charAt(0).toUpperCase() + id.slice(1)

  const [searchParams] = useSearchParams()
  let q = searchParams.get('q')

  return (
    <div style={{ height: '100%' }}>
      <Container>
        <PriceChart name={idUp} number={q} className="me-auto"></PriceChart>
      </Container>
    </div>
  )
}
