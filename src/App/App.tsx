import React, { useEffect, useRef } from "react"
import { useNavigate } from "react-router-dom"
import Header from "../components/UI/Header/Header"
import "./App.scss"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import {
  ACTION_blackTheme,
  ACTION_whiteTheme,
} from "../redux/actions/themeActions"
import Router from "../router/Router"
// import { createSocketOnMessage } from "../utils/socket.message"

function App() {
  const dispatch = useAppDispatch()
  // const url = process.env.REACT_APP_URL_SOCKET
  const isThemeBlack = useAppSelector((state) => state.isThemeBlack)
  // const socket = useRef<WebSocket>()
  const navigate = useNavigate()
  // const user = useAppSelector((state) => state.user)
  const user = false
  const isCheckedAuth = useRef(false)
  const matched = window.matchMedia("(prefers-color-scheme: dark)").matches

  useEffect(() => {
    if (matched) {
      dispatch(ACTION_blackTheme())
    } else {
      dispatch(ACTION_whiteTheme())
    }
  }, [])

  // useEffect(() => {
  //   if (user) {
  //     socket.current = new WebSocket(url as string)
  //     socket.current.onmessage = createSocketOnMessage(dispatch)
  //     socket.current.onclose = () => {
  //       console.log("server close ws connection. Try again later")
  //       navigate("/")
  //     }
  //   }

  //   // if (isCheckedAuth && !user) navigate("/register")
  // }, [user])

  useEffect(() => {
    // dispatch(checkUser())
    isCheckedAuth.current = true
  }, [])

  return (
    <div className={`wrapper ${isThemeBlack && "_black"}`}>
      <Header />
      <main className="main">
        <Router />
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
