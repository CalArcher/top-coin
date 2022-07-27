import NotFound from "./NotFound";
import AboutCoin from "./AboutCoin";
import { useParams } from "react-router-dom";
import React, { useContext } from 'react';
import { Context } from '../hooks/SetContext'

export default function IdCheck() {
  const [{ coinDataSorted, currentNames }, setState] = useContext(Context)
  const { id } = useParams()

  let response = currentNames
  
  if (currentNames.includes(id)){
    response = (<AboutCoin></AboutCoin>)
  } else{
    response = (<NotFound></NotFound>)
  }

  return (
   response
  )
}
