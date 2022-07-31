import React, { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContextSet'

export default function LoadingScreen() {
  const {check, theme, toggleTheme } = useContext(ThemeContext)
  let bgColor = 'rgb(240,240,240)'
  let fgColor = 'rgba(0,104,249, 0.6)'
  if(theme === 'dark'){
    bgColor = 'rgb(29,29,29)'
  }
  return (
    <div style={{backgroundColor: bgColor}} className='loadingScreen'>
      <div style={{color: fgColor}} className='spinners'>
        <div style={{color: fgColor}} className='spinner'></div>
        <div style={{color: fgColor}} className='spinner'></div>
      </div>
    </div>
  )
}
