import React from 'react'
import { Link } from 'react-router-dom'
import ModeToggle from './ModeToggle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'



export default function Header() {
  return (
    <header className='header'>
        <ul>
          <li><Link to='/' className='customLinks'><h4>Top Coin</h4></Link></li>
          <li>
            <div className='dropdown'>
              <h6 className='hoverColor'>Cryptocurrencies <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></h6>
              <div  className='dropdown-content'>
                <ul className='dropdownUl'>
                  <li><a href='https://www.coingecko.com/en/all-cryptocurrencies' target={"_blank"}>All Cryptocurrencies</a></li>
                  <li><a href='https://www.coingecko.com/en/new-cryptocurrencies' target={"_blank"}>New Coins</a></li>
                  <li><a href='https://www.coingecko.com/en/exchanges' target={"_blank"}>Exchanges</a></li>
                </ul>
              </div>
            </div>
          </li>

          <li>
            <div className='dropdown'>
              <h6 className='hoverColor'>Learn About Crypto <FontAwesomeIcon icon={faCaretDown}></FontAwesomeIcon></h6>
              <div  className='dropdown-content'>
                <ul className='dropdownUl'>
                  <li><a href='https://www.coingecko.com/learn/category/guides' target={"_blank"}>Guides</a></li>
                  <li><a href='https://www.coindesk.com/' target={"_blank"}>News</a></li>
                  <li><a href='https://www.coindesk.com/learn/what-are-nfts-and-how-do-they-work/' target={"_blank"}>What are NFTs</a></li>
                  <li><a href='https://www.youtube.com/watch?v=NtcvJSA6B3M' target={"_blank"}>What is Cryptocurrency? (video)</a></li>
                  <li><a href='https://coinmarketcap.com/airdrop/' target={"_blank"}>Airdrops</a></li>

                </ul>
              </div>
            </div>
          </li>
        </ul>
        
      <ModeToggle id='headerToggle'></ModeToggle>
    </header>
  )
}
