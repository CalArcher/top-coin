import React, { useState, useEffect } from "react";
import LoadingScreen from "../components/LoadingScreen";
import axios from "axios";

export const Context = React.createContext()

const DataContext = ({ children }) => {

  const [isLoading, setLoading] = useState(true)
  const [state, setState] = useState([])

  let url = 'http://localhost:3030/coindata'
  useEffect(() => {
    axios.get(url)
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        let currentNames = []
        coinDataSorted.forEach(coin => {
          currentNames.push(coin.name.charAt(0).toUpperCase() + coin.name.slice(1))
        })
        setState({coinDataSorted, currentNames})
        setLoading(false)
      })
      .catch(e => {
        console.log(e)
      })
  }, [url])

  return (
    <div>
      {isLoading ? 
        <LoadingScreen></LoadingScreen>
      : 
          <Context.Provider value={[state, setState]}>{children}</Context.Provider>
      }
    </div>
  )
}

export default DataContext;