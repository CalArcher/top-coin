import React from 'react'
import { Link } from 'react-router-dom'
import ModeToggle from './ModeToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



export default function Header() {
  return (
    <header className='header'>
        <ul>
          <li><Link to='/' className='customLinks'><h3>Top Coin</h3></Link></li>
          <li>
            <div className='dropdown'>
              <h6 className='hoverColor'>Cryptocurrencies <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></h6>
              <div  className='dropdown-content'>
                <ul className='dropdownUl'>
                  <li>Hello World!</li>
                  <li>Hello World!</li>
                  <li>Hello World!</li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className='dropdown'>
              <h6 className='hoverColor'>Learn About Crypto <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></h6>
              <div  className='dropdown-content'>
                <ul className='dropdownUl'>
                  <li>Hello World!</li>
                  <li>Hello World!</li>
                  <li>Hello World!</li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        
      <ModeToggle id='headerToggle'></ModeToggle>
    </header>
  )
}
