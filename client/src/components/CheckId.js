import NotFound from './NotFound'
import AboutCoin from './AboutCoin'
import { useParams, useSearchParams } from 'react-router-dom'
import React, { useContext } from 'react'
import { Context } from '../contexts/DataContext'

export default function IdCheck() {
  let response

  const [{ currentNames }, setState] = useContext(Context)
  const { id } = useParams()
  const idAny = id.charAt(0).toUpperCase() + id.slice(1)

  const [searchParams] = useSearchParams()
  let q = searchParams.get('q')

  if (currentNames.includes(idAny) && currentNames.indexOf(idAny) === Number(q)) {
    response = <AboutCoin></AboutCoin>
  } else {
    response = <NotFound></NotFound>
  }

  return response
}
