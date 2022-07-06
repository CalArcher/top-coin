import React from 'react';
import AboutCoin from './components/AboutCoin'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' exact element={ <Home/> }></Route>
          <Route path="/about" exact element={ <AboutCoin/> }></Route>
        </Routes>
    </Router>
  )
}

export default App
