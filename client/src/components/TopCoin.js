/** @format */

import React from 'react'
import { percentageFormatter } from '../utils'
import { Link } from 'react-router-dom'

export default function TopCoin({ number, name, dailyChange }) {
  const nameNoDash = formatName(name)

  return (
    <div className="topCoinTitle">
      <div>
        <h2 id="topCoinText">
          Today's top coin is{' '}
          <Link className="customLinks" to={`/about/${name}?q=${number}`} number={number}>
            <span className="successGreen">{nameNoDash}</span>
          </Link>
          , and it's up {percentageFormatter.format(dailyChange)} in the past 24 hours
        </h2>
      </div>
    </div>
  )
}

//turns coin's name from format xxx-xxx to Xxx Xxx
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
