import React, { useState, useContext } from 'react'
import { Card, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as allIcons from '@fortawesome/free-solid-svg-icons'
import { Context } from '../contexts/DataContext'


export default function CoinLabels() {
  const [{ coinData, currentNames, sortState, setSortState, topCoin} , setState] = useContext(Context)

  let stackStyle = {
    display: 'grid',
    gridTemplateColumns: '50px 1.75fr 1fr .9fr .9fr 1.1fr',
    gap: '1rem'
  }

  const [sortOrder, setSortOrder] = useState('highLow24h')
  const [caretUpDown, setCaretUpDown] = useState('faCaretDown')

  function orderIt(){
    if(sortOrder === ''){

    }
  }

  //IN PROGRESS^^
  //IN PROGRESS
  //IN PROGRESS
  //IN PROGRESS


  return (
    <Card className='coinLabelStyle'>
      <Card.Body className='coinLabelBody'>
        <Stack direction="horizontal" style={stackStyle}>
          <span border="1px solid red">Rank</span>
          <span border="1px solid red">Name</span>
          <span onClick={orderIt} border="1px solid red">Price <FontAwesomeIcon icon={allIcons[caretUpDown]}></FontAwesomeIcon></span>
          <span onClick={orderIt} border="1px solid red">24h% <FontAwesomeIcon icon={allIcons[caretUpDown]}></FontAwesomeIcon></span>
          <span onClick={orderIt} border="1px solid red">7d% <FontAwesomeIcon icon={allIcons[caretUpDown]}></FontAwesomeIcon></span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
