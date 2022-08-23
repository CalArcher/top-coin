/** @format */

import React, { useState, useEffect } from 'react'
import LoadingScreen from '../components/LoadingScreen'
import axios from 'axios'

export const Context = React.createContext()

const DataContext = ({ children }) => {
  const [isLoading, setLoading] = useState(true)
  const [coinData, setCoinData] = useState([])
  const [currentNames, setCurrentNames] = useState([])
  const [sortState, setSortState] = useState('highLow24h')
  const [topCoin, setTopCoin] = useState([])
  const [state, setState] = useState([])
  const [coinDataSorted, setCoinDataSorted] = useState([])

  const url = 'http://localhost:3030/api/coindata'

  useEffect(() => {
    let coinNames = []
    let coinList = []

    axios
      .get(url)
      .then(data => {
        let initCoinDataSorted = data.data.slice(0, 10).sort((a, b) => b.percent_change_24h - a.percent_change_24h)

        coinList = initCoinDataSorted
        for (let i = 0; i < initCoinDataSorted.length; i++) {
          if (typeof initCoinDataSorted[i].name.charAt(0) === 'string') {
            initCoinDataSorted[i].name = initCoinDataSorted[i].name.charAt(0).toUpperCase() + initCoinDataSorted[i].name.slice(1)
          }
          coinNames.push(initCoinDataSorted[i].name)
        }
        setTopCoin(initCoinDataSorted[0])
        setCoinData(coinList)
        setCurrentNames(coinNames)
        setState({ coinData, currentNames, sortState, setSortState, topCoin })
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    let coinNames = []
    let coinList = []

    function capitalizeNames(sortedCoins) {
      for (let i = 0; i < sortedCoins.length; i++) {
        if (typeof sortedCoins[i].name.charAt(0) === 'string') {
          sortedCoins[i].name = sortedCoins[i].name.charAt(0).toUpperCase() + sortedCoins[i].name.slice(1)
        }
        coinNames.push(sortedCoins[i].name)
      }
    }

    if (sortState === 'highLowPrice') {
      const priceHighToLow = coinData.slice(0, 10)
      priceHighToLow.sort((a, b) => b.current_price[b.current_price.length - 1] - a.current_price[a.current_price.length - 1])
      coinList = priceHighToLow
      capitalizeNames(priceHighToLow)
    } else if (sortState === 'lowHighPrice') {
      const priceLowToHigh = coinData.slice(0, 10)
      priceLowToHigh.sort((a, b) => a.current_price[a.current_price.length - 1] - b.current_price[b.current_price.length - 1])
      coinList = priceLowToHigh
      capitalizeNames(priceLowToHigh)
    } else if (sortState === 'highLow24h') {
      const dailyHighLow = coinData.slice(0, 10)
      dailyHighLow.sort((a, b) => b.percent_change_24h - a.percent_change_24h)
      coinList = dailyHighLow
      capitalizeNames(dailyHighLow)
    } else if (sortState === 'lowHigh24h') {
      const dailyLowToHigh = coinData.slice(0, 10)
      dailyLowToHigh.sort((a, b) => a.percent_change_24h - b.percent_change_24h)
      coinList = dailyLowToHigh
      capitalizeNames(dailyLowToHigh)
    } else if (sortState === 'highLow7d') {
      const weeklyHighLow = coinData.slice(0, 10)
      weeklyHighLow.sort((a, b) => b.percent_change_7d - a.percent_change_7d)
      coinList = weeklyHighLow
      capitalizeNames(weeklyHighLow)
    } else if (sortState === 'lowHigh7d') {
      const weeklyLowHigh = coinData.slice(0, 10)
      weeklyLowHigh.sort((a, b) => a.percent_change_7d - b.percent_change_7d)
      coinList = weeklyLowHigh
      capitalizeNames(weeklyLowHigh)
    } else {
      coinList = coinData
      capitalizeNames(coinData)
    }
    setCoinData(coinList)
    setCurrentNames(coinNames)
    setState({ coinData, currentNames, sortState, setSortState, topCoin })
  }, [sortState])

  return (
    <div>
      {isLoading ? (
        <LoadingScreen></LoadingScreen>
      ) : (
        <Context.Provider value={[{ coinData, currentNames, sortState, setSortState, topCoin }, setState]}>{children}</Context.Provider>
      )}
    </div>
  )
}

export default DataContext
