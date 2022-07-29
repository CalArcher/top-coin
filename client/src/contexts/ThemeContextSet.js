import React, { useState, useEffect } from "react";

export const ThemeContext = React.createContext()

const ThemeContextSet = ({ children }) => {
  const [theme, setTheme] = useState(null)
  const toggleTheme = () => {
    console.log('context file',theme)
    setTheme((current) => (current === 'light' ? 'dark' : 'light'))
  }
  return (
      <ThemeContext.Provider value={[theme, toggleTheme]}>{children}</ThemeContext.Provider>
  )
}

export default ThemeContextSet;
