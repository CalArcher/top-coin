/** @format */

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown, faExternalLink, faBars } from '@fortawesome/free-solid-svg-icons'

//Temporary style until I make the whole app mobile properly friendly

function HamburgerHeader() {
  const [menuState, setMenuState] = useState('closed')

  const changeMenuState = () => {
    if (menuState === 'closed') {
      setMenuState('open')
    } else if (menuState === 'open') {
      setMenuState('closed')
    }
  }

  return (
    <div className="hamburgerHeader">
      <Link to="/" className="customLinks">
        <h4>Top Coin</h4>
      </Link>
      <div className="hamburgerIcon" onClick={changeMenuState}>
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
      <div
        onClick={() => {
          setMenuState('closed')
        }}
        className={`hamburgerBackground ${menuState === 'closed' ? 'closeMenu' : 'openMenu'}`}
      ></div>
      <div className={`hamburgerContent ${menuState === 'closed' ? 'closeMenu' : 'openMenu'}`}>
        <div className="hamburgerContStyle">
          <ul>
            <li>
              <ThemeToggle id="headerToggle"></ThemeToggle>
            </li>
            <li>
              <div className="dropdown">
                <h6 className="hoverColor">
                  Cryptocurrencies <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                </h6>
                <div className="dropdown-content">
                  <ul className="dropdownUl">
                    <li>
                      <a href="https://www.coingecko.com/en/all-cryptocurrencies" target={'_blank'} rel="noreferrer">
                        All Cryptocurrencies <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.coingecko.com/en/new-cryptocurrencies" target={'_blank'} rel="noreferrer">
                        New Coins <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.coingecko.com/en/exchanges" target={'_blank'} rel="noreferrer">
                        Exchanges <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li>
              <div className="dropdown">
                <h6 className="hoverColor">
                  Learn About Crypto <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon>
                </h6>
                <div className="dropdown-content">
                  <ul className="dropdownUl">
                    <li>
                      <a href="https://www.coingecko.com/learn/category/guides" target={'_blank'} rel="noreferrer">
                        Guides <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.coindesk.com/" target={'_blank'} rel="noreferrer">
                        News <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.coindesk.com/learn/what-are-nfts-and-how-do-they-work/" target={'_blank'} rel="noreferrer">
                        What are NFTs <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.youtube.com/watch?v=NtcvJSA6B3M" target={'_blank'} rel="noreferrer">
                        What is Cryptocurrency? (video) <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                    <li>
                      <a href="https://coinmarketcap.com/airdrop/" target={'_blank'} rel="noreferrer">
                        Airdrops <FontAwesomeIcon className="externalLink" icon={faExternalLink}></FontAwesomeIcon>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HamburgerHeader
