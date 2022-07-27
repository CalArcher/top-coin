import React, { useState, useEffect} from 'react'
import axios from 'axios'
import LoadingScreen from '../components/LoadingScreen'

const useFetchData = (url) => {
  const [isLoading, setLoading] = useState(true)
  const [coinData, setCoinData] = useState([])
  const [currentNames, setCurrentNames] = useState([])


  useEffect(() => {
    axios.get(url)
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        let coinNames = []
        coinDataSorted.forEach(coin => {
          coinNames.push(coin.name.charAt(0).toUpperCase() + coin.name.slice(1))
        })
        setCurrentNames(coinNames)
        setCoinData(coinDataSorted)
        setLoading(false)
      })
  }, [url])


  return {coinData, isLoading, currentNames}
}

export default useFetchData