import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext()

const ThemeContextSet = ({ children }) => {

  let checkMode = JSON.parse(localStorage.getItem('check'))
  let startValue = false
  if(checkMode){
    startValue = checkMode
  }
  let startTheme = startValue === true ? 'dark' : 'light'
  const [theme, setTheme] = useState(startTheme)
  const [check, setCheck] = useState(startValue)
  let ans = startValue === true ? true : false

  localStorage.setItem('check', ans)

  const toggleTheme = () => {

    console.log('start function: ', check)
    ///////////////////
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'))
    ans = theme === 'light' ? true : false
    setCheck(ans)
    ///////////////////
    localStorage.setItem('check', ans)
    let checkMode = localStorage.getItem('check')
    console.log('STORAGE: ', checkMode)

    console.log('end function: ', check)
  
  }

  
  return (
      <ThemeContext.Provider value={{ check, theme, toggleTheme }}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextSet;
