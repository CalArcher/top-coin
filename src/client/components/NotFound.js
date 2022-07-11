import React from 'react'
import { Button } from 'react-bootstrap'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'
import Home from './Home'

export default function NotFound() {
  return (
    <Container className='my-5'>
      <h3>404 page not found :(</h3>
      <Link to='/'><Button className="secondary">Take me home</Button></Link>
    </Container>
  )
}
