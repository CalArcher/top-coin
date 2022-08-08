import React, { useState, useContext } from 'react'
import { Card, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as allIcons from '@fortawesome/free-solid-svg-icons'
import { Context } from '../contexts/DataContext'


export default function CoinLabels() {
  const [{ coinData, currentNames, sortState, setSortState, topCoin, arrow1, setArrow1, arrow2, setArrow2, arrow3, setArrow3 }, setState] = useContext(Context)

  //highLowPrice lowHighPrice highLow24h lowHigh24h highLow7d lowHigh7d

  
  let upComponent = <FontAwesomeIcon icon={allIcons['faCaretUp']}></FontAwesomeIcon>
  let downComponent = <FontAwesomeIcon icon={allIcons['faCaretDown']}></FontAwesomeIcon>
  let nullComponent = <span></span>
  let sortSymbol1 = arrow1
  let sortSymbol2 = arrow2
  let sortSymbol3 = arrow3

  function orderIt1(){
    //if condition not working right now, just else
    if(sortSymbol1 === upComponent){
      console.log('---------------------')
      console.log('SORT DOWN')
      console.log('---------------------')
      setArrow1(downComponent)
      setArrow2(nullComponent)
      setArrow3(nullComponent) 
      setSortState('lowHighPrice')
    }else{
      setArrow1(upComponent)
      setArrow2(nullComponent)
      setArrow3(nullComponent) 
      setSortState('highLowPrice')
    }
    console.log("AFTER", sortSymbol1, sortSymbol2, sortSymbol3)
  }
  console.log("BEFORE", sortSymbol1, sortSymbol2, sortSymbol3)
  console.log('-----LOADED------')

  function orderIt2(){
    console.log('24h')
  }
  function orderIt3(){
    console.log('7d')
  }
  return (
    <Card className='coinLabelStyle'>
      <Card.Body className='coinLabelBody'>
        <Stack className='stackStyle' direction="horizontal">
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
