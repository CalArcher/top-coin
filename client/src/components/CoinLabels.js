import React, { useState, useContext } from 'react'
import { Card, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as allIcons from '@fortawesome/free-solid-svg-icons'
import { Context } from '../contexts/DataContext'


export default function CoinLabels() {
  const [{ coinData, currentNames, sortState, setSortState, topCoin }, setState] = useContext(Context)

  //highLowPrice lowHighPrice highLow24h lowHigh24h highLow7d lowHigh7d

  
  let upComponent = <FontAwesomeIcon icon={allIcons['faCaretUp']}></FontAwesomeIcon>
  let downComponent = <FontAwesomeIcon icon={allIcons['faCaretDown']}></FontAwesomeIcon>
  let nullComponent = <span></span>

  let sortSymbols;

  if(sortState === 'highLowPrice'){
    sortSymbols = [upComponent, nullComponent, nullComponent]
  }else if(sortState === 'lowHighPrice'){
    sortSymbols = [downComponent, nullComponent, nullComponent]
  }else if(sortState === 'highLow24h'){
    sortSymbols = [nullComponent, upComponent, nullComponent]
  }else if(sortState === 'lowHigh24h'){
    sortSymbols = [nullComponent, downComponent, nullComponent]
  }else if(sortState === 'highLow7d'){
    sortSymbols = [nullComponent, nullComponent, upComponent]
  }else if(sortState === 'lowHigh7d'){
    sortSymbols = [nullComponent, nullComponent, downComponent]
  }else{
    sortSymbols = [nullComponent, upComponent, nullComponent]
  }



  function orderIt1(){
    console.log('ORDERIT1', sortState)
    if(sortState === 'highLowPrice'){
      setSortState('lowHighPrice')
      console.log('sorted')
    }else{
      setSortState('highLowPrice')
    }
  }
  function orderIt2(){
    if(sortState === 'highLow24h'){
      setSortState('lowHigh24h')
    }else{
      setSortState('highLow24h')
    }
  }
  function orderIt3(){
    if(sortState === 'highLow7d'){
      setSortState('lowHigh7d')
    }else{
      setSortState('highLow7d')
    }
  }
  console.log('symb', sortSymbols)
  console.log('-----------')
  console.log('----LOADED---')
  console.log('-----------')

  return (
    <Card className='coinLabelStyle'>
      <Card.Body className='coinLabelBody'>
        <Stack className='stackStyle' direction="horizontal">
          <span border="1px solid red">Rank</span>
          <span border="1px solid red">Name</span>
          <span onClick={orderIt1} border="1px solid red">Price {sortSymbols[0]}</span>
          <span onClick={orderIt2} border="1px solid red">24h% {sortSymbols[1]}</span>
          <span onClick={orderIt3} border="1px solid red">7d% {sortSymbols[2]}</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
