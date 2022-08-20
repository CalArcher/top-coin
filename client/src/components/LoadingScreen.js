import React from 'react'
import { useTheme } from '../contexts/ThemeContextSet'

export default function LoadingScreen() {
  const { check, theme, toggleTheme } = useTheme()
  let bgColor = 'rgb(253,253,253)'
  let fgColor = 'rgba(0,104,249, 0.6)'
  if (theme === 'dark') {
    bgColor = 'rgb(29,29,29)'
  }

  return (
    <div style={{ backgroundColor: bgColor }} className="loadingScreen">
      <div style={{ color: fgColor }} className="spinners">
        <div style={{ color: fgColor }} className="spinner"></div>
        <div style={{ color: fgColor }} className="spinner"></div>
      </div>
    </div>
  )
}
