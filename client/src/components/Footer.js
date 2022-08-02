import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {

  return (
    <footer id='footer'>
      <div>
        <ul>
          <li>
            <a href='https://github.com/CalArcher/' target={"_blank"}>
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </li>
          <li>
            <a href='https://twitter.com/CalArcher_' target={"_blank"}>
              <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
