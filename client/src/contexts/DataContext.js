import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";

export const Context = React.createContext()

const DataContext = ({ children }) => {

  const [isLoading, setLoading] = useState(true)
  const [coinData, setCoinData] = useState([])
  const [currentNames, setCurrentNames] = useState([])
  const [sortState, setSortState] = useState('highLow24h')
  const [topCoin, setTopCoin] = useState([])
  const [state, setState] = useState([])
  const [coinDataSorted, setCoinDataSorted] = useState([])


  let url = 'http://localhost:3030/coindata'

  useEffect(() => {
    let coinNames = []
    // let coinsUpper = []
    let coinList = []

    axios.get(url)
      .then(data => {
        let initCoinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        // let currentNames = []
        // initCoinDataSorted.forEach(coin => {
        //   coinNames.push(coin.name.charAt(0).toUpperCase() + coin.name.slice(1))
        // })
        coinList = initCoinDataSorted
        for(let i=0; i<initCoinDataSorted.length; i++){
          if(typeof initCoinDataSorted[i].name.charAt(0) === 'string'){
            initCoinDataSorted[i].name = initCoinDataSorted[i].name.charAt(0).toUpperCase() + initCoinDataSorted[i].name.slice(1)
          }
          coinNames.push(initCoinDataSorted[i].name)
        }
        setTopCoin(initCoinDataSorted[0])
        setCoinData(coinList)
        setCurrentNames(coinNames)
        setState({coinData, currentNames, sortState, setSortState, topCoin})
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
      })
  }, [])


 

  useEffect(() => {
          let coinNames = []
          // let coinsUpper = []
          let coinList = []
    
          if(sortState === 'highLowPrice'){
            let priceHighToLow = coinData.slice(0,10)
            priceHighToLow.sort((a,b) => b.current_price[b.current_price.length - 1] - a.current_price[a.current_price.length - 1])
            coinList = priceHighToLow
            for(let i=0; i<priceHighToLow.length; i++){
              if(typeof priceHighToLow[i].name.charAt(0) === 'string'){
                priceHighToLow[i].name = priceHighToLow[i].name.charAt(0).toUpperCase() + priceHighToLow[i].name.slice(1)
              }
              coinNames.push(priceHighToLow[i].name)
              // coinsUpper.push(priceHighToLow[i].name)
            }
          }
          else if(sortState === 'lowHighPrice'){
            let priceLowToHigh = coinData.slice(0,10)
            priceLowToHigh.sort((a,b) => a.current_price[a.current_price.length - 1] - b.current_price[b.current_price.length - 1])
            coinList = priceLowToHigh
            for(let i=0; i<priceLowToHigh.length; i++){
              if(typeof priceLowToHigh[i].name.charAt(0) === 'string'){
                priceLowToHigh[i].name = priceLowToHigh[i].name.charAt(0).toUpperCase() + priceLowToHigh[i].name.slice(1)
              }
              coinNames.push(priceLowToHigh[i].name)
              // coinsUpper.push(priceLowToHigh[i].name)
            }
          }
          else if(sortState === 'highLow24h'){
            let dailyHighLow = coinData.slice(0,10)
            dailyHighLow.sort((a,b) => b.percent_change_24h - a.percent_change_24h)
            coinList = dailyHighLow
            for(let i=0; i<dailyHighLow.length; i++){
              if(typeof dailyHighLow[i].name.charAt(0) === 'string'){
                dailyHighLow[i].name = dailyHighLow[i].name.charAt(0).toUpperCase() + dailyHighLow[i].name.slice(1)
              }
              coinNames.push(dailyHighLow[i].name)
              // coinsUpper.push(dailyHighLow[i].name)
            }
          }
          else if(sortState === 'lowHigh24h'){
            let dailyLowToHigh = coinData.slice(0,10)
            dailyLowToHigh.sort((a,b) => a.percent_change_24h - b.percent_change_24h)
            coinList = dailyLowToHigh
            for(let i=0; i<dailyLowToHigh.length; i++){
              if(typeof dailyLowToHigh[i].name.charAt(0) === 'string'){
                dailyLowToHigh[i].name = dailyLowToHigh[i].name.charAt(0).toUpperCase() + dailyLowToHigh[i].name.slice(1)
              }
              coinNames.push(dailyLowToHigh[i].name)
              // coinsUpper.push(dailyLowToHigh[i].name)
            }
          }
          else if(sortState === 'highLow7d'){
            let weeklyHighLow = coinData.slice(0,10)
            weeklyHighLow.sort((a,b) => b.percent_change_7d - a.percent_change_7d)
            coinList = weeklyHighLow
            for(let i=0; i<weeklyHighLow.length; i++){
              if(typeof weeklyHighLow[i].name.charAt(0) === 'string'){
                weeklyHighLow[i].name = weeklyHighLow[i].name.charAt(0).toUpperCase() + weeklyHighLow[i].name.slice(1)
              }
              coinNames.push(weeklyHighLow[i].name)
              // coinsUpper.push(weeklyHighLow[i].name)
            }
          }
          else if(sortState === 'lowHigh7d'){
            let weeklyLowHigh = coinData.slice(0,10)
            weeklyLowHigh.sort((a,b) => a.percent_change_7d - b.percent_change_7d)
            coinList = weeklyLowHigh
            for(let i=0; i<weeklyLowHigh.length; i++){
              if(typeof weeklyLowHigh[i].name.charAt(0) === 'string'){
                weeklyLowHigh[i].name = weeklyLowHigh[i].name.charAt(0).toUpperCase() + weeklyLowHigh[i].name.slice(1)
              }
              coinNames.push(weeklyLowHigh[i].name)
              // coinsUpper.push(weeklyLowHigh[i].name)
            }
          }
          else{
            coinList = coinData
            for(let i=0; i<coinData.length; i++){
              if(typeof coinData[i].name.charAt(0) === 'string'){
                coinData[i].name = coinData[i].name.charAt(0).toUpperCase() + coinData[i].name.slice(1)
              }
              coinNames.push(coinData[i].name)
              // coinsUpper.push(coinData[i].name)
            }
          }
        setCoinData(coinList)
        setCurrentNames(coinNames)
        setState({coinData, currentNames, sortState, setSortState, topCoin})
       
  }, [sortState])

  return (
    <div>
      {isLoading ? 
        <LoadingScreen></LoadingScreen>
      : 
          <Context.Provider value={[{ coinData, currentNames, sortState, setSortState, topCoin }, setState]}>{children}</Context.Provider>
      }
    </div>
  )
}

export default DataContext;









