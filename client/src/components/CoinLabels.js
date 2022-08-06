import React from 'react'
import { Card, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

export default function CoinLabels() {
  let stackStyle = {
    display: 'grid',
    gridTemplateColumns: '50px 1.75fr 1fr .9fr .9fr 1.1fr',
    gap: '1rem'
  }

  

  return (
    <Card className='coinLabelStyle'>
      <Card.Body className='coinLabelBody'>
        <Stack direction="horizontal" style={stackStyle}>
          <span border="1px solid red">Rank</span>
          <span border="1px solid red">Name</span>
          <span border="1px solid red">Price <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></span>
          <span border="1px solid red">24h%</span>
          <span border="1px solid red">7d%</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
