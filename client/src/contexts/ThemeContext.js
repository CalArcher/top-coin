import React, {Component, createContext, useState} from 'react'

export const ThemeContext = createContext()

export default function ThemeContext() {
  const [theme, setTheme] = useState()

  const toggleTheme = () => {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }


  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
