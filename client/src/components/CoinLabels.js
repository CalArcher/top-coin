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



  //highLowPrice lowHighPrice highLow24h lowHigh24h highLow7d lowHigh7d

  
  let upComponent = <FontAwesomeIcon icon={allIcons['faCaretUp']}></FontAwesomeIcon>
  let downComponent = <FontAwesomeIcon icon={allIcons['faCaretDown']}></FontAwesomeIcon>
  let nullComponent = <span></span>
  let sortSymbol1 = nullComponent
  let sortSymbol2 = upComponent
  let sortSymbol3 = nullComponent

  function orderIt1(){
    if(sortSymbol1 === upComponent){
      sortSymbol1 = downComponent
      sortSymbol2 = nullComponent
      sortSymbol3 = nullComponent
      setSortState('lowHighPrice')
    }else{
      sortSymbol1 = upComponent
      sortSymbol2 = nullComponent
      sortSymbol3 = nullComponent
      setSortState('highLowPrice')
    }
    console.log("AFTER", sortSymbol1, sortSymbol2, sortSymbol3)
  }
  console.log("BEFORE", sortSymbol1, sortSymbol2, sortSymbol3)

  function orderIt2(){
    console.log('24h')
  }
  function orderIt3(){
    console.log('24h')
  }
  return (
    <Card className='coinLabelStyle'>
      <Card.Body className='coinLabelBody'>
        <Stack direction="horizontal" style={stackStyle}>
          <span border="1px solid red">Rank</span>
          <span border="1px solid red">Name</span>
          <span onClick={orderIt1} border="1px solid red">Price {sortSymbol1}</span>
          <span onClick={orderIt2} border="1px solid red">24h% {sortSymbol2}</span>
          <span onClick={orderIt3} border="1px solid red">7d% {sortSymbol3}</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
