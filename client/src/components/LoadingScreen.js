import React from 'react'
import { useTheme } from '../contexts/ThemeContextSet'
import { ThemeColors, LightThemeColors, DarkThemeColors } from '../ThemeColors'

export default function LoadingScreen() {
  const { check, theme, toggleTheme } = useTheme()
  let bgColor = LightThemeColors.bgColor
  let fgColor = ThemeColors.blueColorTrans
  if (theme === 'dark') {
    bgColor = DarkThemeColors.bgColor
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
