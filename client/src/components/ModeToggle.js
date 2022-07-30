import React, { useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from '../contexts/ThemeContextSet'


export default function ModeToggle() {
  const {check, theme, toggleTheme } = useContext(ThemeContext)
  let mode = check === true ? 'Dark Mode' : 'Light Mode'
  console.log('MODE: ',theme)  
  console.log('checkToggle: ', check)
  console.log('---------------------')
  return (
    <div className='toggleContainer'>
      <div className='toggleStyle'>
        <span className='modeText'>{mode}</span>
        <label>
          <input onChange={toggleTheme} className='checkbox' type='checkbox' checked={check}></input>
          <div className='space'>
            <div className='lightbulbWrapper'>
              <FontAwesomeIcon className='lightbulb' icon={faLightbulb}></FontAwesomeIcon>
            </div>
            <div className='button'></div>
            <div className='moonWrapper'>
              <FontAwesomeIcon className='moon' icon={faMoon}></FontAwesomeIcon>
            </div>
          </div>
        </label>
      </div>
    </div>
  
  )
}