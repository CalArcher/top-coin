import NotFound from "./NotFound";
import AboutCoin from "./AboutCoin";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import LoadingScreen from "./LoadingScreen";
import useFetchData from "./useFetchData";

export default function IdCheck() {
  const { id } = useParams()
  const { coinData, isLoading, currentNames } = useFetchData('http://localhost:3030/coindata')

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
