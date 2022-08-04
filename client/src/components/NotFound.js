import React from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import ModeToggle from './ModeToggle';


export default function NotFound() {

  return (
    <div className='notFound'>
      <Container className='notFoundCont'>
        <h3>404 page not found :(</h3>
        <Link to='/'><Button className="secondary">Take me home</Button></Link>
      </Container>
      <div></div>
    </div>
  )
}
