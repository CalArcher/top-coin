import React from 'react'
import AboutCoin from './components/AboutCoin'
import Home from './components/Home'
import NotFound from './components/NotFound'
import { BrowserRouter as Router, Routes, Switch, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route path={"/about/:id"} exact element={ <AboutCoin/> }></Route>
          <Route path='/' exact element={ <Home/> }></Route>
          <Route path='*' exact element={ <NotFound/> }></Route>
        </Routes>
    </Router>
  )
}

export default App
