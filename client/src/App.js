import React, { useContext } from 'react';
import Home from './components/Home'
import NotFound from './components/NotFound'
import CheckId from './components/CheckId'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeContext } from './contexts/ThemeContextSet'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const { check } = useContext(ThemeContext)
  let themeId = check === true ? 'dark' : 'light'
  return (
    <div id={themeId}>
      <Router>
        <Header></Header>
        <Routes>
          <Route path={"/about/:id"} exact element={ <CheckId/> }></Route>
          <Route path='/' exact element={ <Home/> }></Route>
          <Route path='*' exact element={ <NotFound/> }></Route>
        </Routes>
        <Footer></Footer>
      </Router>
    </div>
  )
}

export default App
