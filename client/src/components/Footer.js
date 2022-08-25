/** @format */

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'

export default function Footer() {
  return (
    <footer id="footer">
      <div className="footerCont">
        <span>
          Data provided by{' '}
          <a className="coinGeckoCredit" href="https://www.coingecko.com/" target={'_blank'} rel="noreferrer">
            CoinGecko
          </a>
        </span>
        <ul>
          <li>
            <a href="https://github.com/CalArcher/" target={'_blank'} alt="GitHub Logo" rel="noreferrer">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/CalArcher_" target={'_blank'} alt="Twitter Logo" rel="noreferrer">
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
