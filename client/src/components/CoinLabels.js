import React, { useState, useContext } from 'react'
import { Card, Stack } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as allIcons from '@fortawesome/free-solid-svg-icons'
import { Context } from '../contexts/DataContext'

export default function CoinLabels() {
  const [{ coinData, currentNames, sortState, setSortState, topCoin }, setState] = useContext(Context)

  const upComponent = <FontAwesomeIcon icon={allIcons['faCaretUp']}></FontAwesomeIcon>
  const downComponent = <FontAwesomeIcon icon={allIcons['faCaretDown']}></FontAwesomeIcon>
  const nullComponent = <span></span>

  let sortSymbols = [null, null, null]

  if (sortState === 'highLowPrice') {
    sortSymbols[0] = downComponent
  } else if (sortState === 'lowHighPrice') {
    sortSymbols[0] = upComponent
  } else if (sortState === 'highLow24h') {
    sortSymbols[1] = downComponent
  } else if (sortState === 'lowHigh24h') {
    sortSymbols[1] = upComponent
  } else if (sortState === 'highLow7d') {
    sortSymbols[2] = downComponent
  } else if (sortState === 'lowHigh7d') {
    sortSymbols[2] = upComponent
  } else {
    sortSymbols = [nullComponent, downComponent, nullComponent]
  }

  function orderIt1() {
    if (sortState === 'highLowPrice') {
      setSortState('lowHighPrice')
    } else {
      setSortState('highLowPrice')
    }
  }
  function orderIt2() {
    if (sortState === 'highLow24h') {
      setSortState('lowHigh24h')
    } else {
      setSortState('highLow24h')
    }
  }
  function orderIt3() {
    if (sortState === 'highLow7d') {
      setSortState('lowHigh7d')
    } else {
      setSortState('highLow7d')
    }
  }

  return (
    <Card className="coinLabelStyle">
      <Card.Body className="coinLabelBody">
        <Stack className="noSelect stackStyle" direction="horizontal">
          <span>Rank</span>
          <span>Name</span>
          <span className="clickable" onClick={orderIt1}>
            Price {sortSymbols[0]}
          </span>
          <span className="clickable" onClick={orderIt2}>
            24h% {sortSymbols[1]}
          </span>
          <span className="clickable" onClick={orderIt3}>
            7d% {sortSymbols[2]}
          </span>
          <span></span>
        </Stack>
      </Card.Body>
    </Card>
  )
}
