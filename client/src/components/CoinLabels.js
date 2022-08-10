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
    if(sortState === 'highLowPrice'){
      setSortState('lowHighPrice')
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
  let cursorStyle = {
    cursor: 'default'
  }
  return (
    <Card className='coinLabelStyle'>
      <Card.Body className='coinLabelBody'>
        <Stack className='noSelect stackStyle' direction="horizontal">
          <span style={cursorStyle}>Rank</span>
          <span style={cursorStyle}>Name</span>
          <span className='clickable' onClick={orderIt1}>Price {sortSymbols[0]}</span>
          <span className='clickable' onClick={orderIt2}>24h% {sortSymbols[1]}</span>
          <span className='clickable' onClick={orderIt3}>7d% {sortSymbols[2]}</span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
