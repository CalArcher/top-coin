import React from 'react'
import AboutCoin from './components/AboutCoin'
import Home from './components/Home'
import NotFound from './components/NotFound'
import CheckId from './components/CheckId'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'


function App() {
  return (
    <Router>
        <Routes>
          <Route path={"/about/:id"} exact element={ <CheckId/> }></Route>
          <Route path='/' exact element={ <Home/> }></Route>
          <Route path='*' exact element={ <NotFound/> }></Route>
        </Routes>
    </Router>
  )
}

export default App
