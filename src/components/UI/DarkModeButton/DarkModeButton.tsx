import React from "react"
import "./DarkModeButton.scss"
import { useAppDispatch, useAppSelector } from "../../../hooks/redux"
import {
  ACTION_blackTheme,
  ACTION_whiteTheme,
} from "../../../redux/actions/themeActions"

const DarkModeButton = () => {
  const dispatch = useAppDispatch()
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)
  const themeHandler = () => {
    if (isThemeBlack) {
      dispatch(ACTION_whiteTheme())
    } else {
      dispatch(ACTION_blackTheme())
    }
  }

  return (
    <div className="DarkModeButton">
      <input
        onClick={themeHandler}
        type="checkbox"
        className="checkbox"
        id="checkbox"
      />
      <label htmlFor="checkbox" className="label">
        <img src="assets/svg/moon.svg" className="fas fa-moon"></img>
        <img src="assets/svg/sun.svg" className="fas fa-sun"></img>
        <div className="ball" />
      </label>
    </div>
  )
}

export default DarkModeButton
