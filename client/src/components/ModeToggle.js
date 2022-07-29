import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb, faMoon } from '@fortawesome/free-solid-svg-icons'

export default function ModeToggle() {
  return (
    <div className='toggleContainer'>
      <input type="checkbox" className="checkbox" id="check" />
      <div className="content">
          <label className="label" for="check">
            <FontAwesomeIcon className='lightbulb' icon={faLightbulb}></FontAwesomeIcon>
            <FontAwesomeIcon className='moon' icon={faMoon}></FontAwesomeIcon>
            <div className="ball"></div>
          </label>
      </div>
    </div>
  )
}
