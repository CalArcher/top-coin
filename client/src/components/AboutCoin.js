import React from 'react'
import Container from 'react-bootstrap/Container'
import PriceChart from './PriceChart'
import { useParams, useSearchParams } from 'react-router-dom'

export default function AboutCoin() {
  const { id } = useParams()
  let idUp = formatName(id)

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


function formatName(coinId) {
  let idArray = coinId.charAt(0).toUpperCase() + coinId.slice(1)
  idArray = idArray.split('')
  for (let i = 0; i < idArray.length; i++) {
    if (idArray[i] === '-') {
      idArray[i] = ' '
      idArray[i + 1] = idArray[i + 1].toUpperCase()
    }
  }
  return idArray.join('')
}