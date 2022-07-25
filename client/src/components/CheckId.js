import NotFound from "./NotFound";
import AboutCoin from "./AboutCoin";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LoadingScreen from "./LoadingScreen";


export default function IdCheck() {
  const [currentNames, setCurrentNames] = useState([])
  const [isLoading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    axios.get('http://localhost:3030/coindata')
      .then(data => {
        let coinDataSorted = data.data.slice(0,10).sort((a,b) => b.percent_change_24h - a.percent_change_24h)
        let coinNames = []
        coinDataSorted.forEach(coin => {
          coinNames.push(coin.name.charAt(0).toUpperCase() + coin.name.slice(1))
        })
        setCurrentNames(coinNames)
        setLoading(false)
      })
  }, [])

  let response

  if(isLoading === false){
    if (currentNames.includes(id)){
      response = (<AboutCoin></AboutCoin>)
    } else{
      response = (<NotFound></NotFound>)
    }
  }

  return (
    <div>
       {isLoading ? <LoadingScreen/>
      :
       response
      }
    </div>
   
  )
}
