import React from 'react'
import Container from 'react-bootstrap/Container'
import PriceChart from './PriceChart'
import { useParams, useSearchParams } from 'react-router-dom'

export default function AboutCoin() {
  const { id } = useParams()
  let idUp = formatName(id)

  //the q parameter in the url is to practice modifying and getting data from urls. Right now, it serves the purpose of a prop, and tells AboutCoin which coin the chart is for from the array. It could easily be eliminated by using a prop, but it was to practice manipulating urls

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