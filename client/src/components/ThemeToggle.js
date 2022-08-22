import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'
import { useTheme } from '../contexts/ThemeContextSet'

export default function ThemeToggle() {
  const { check, toggleTheme } = useTheme()

  let mode = check === true ? 'Dark Mode' : 'Light Mode'

  return (
    <div className="toggleContainer">
      <div className="toggleStyle">
        <label className="clickable">
          <input onChange={toggleTheme} className="checkbox" type="checkbox" checked={check}></input>
          <div className="space">
            <div className="lightbulbWrapper">
              <FontAwesomeIcon className="lightbulb" icon={faLightbulb}></FontAwesomeIcon>
            </div>
            <div className="button"></div>
            <div className="moonWrapper">
              <FontAwesomeIcon className="moon" icon={faMoon}></FontAwesomeIcon>
            </div>
          </div>
        </label>
      </div>
      <span className="noSelect modeText">{mode}</span>
    </div>
  )
}
