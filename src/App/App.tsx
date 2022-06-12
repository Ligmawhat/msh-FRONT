import React, { useEffect, useRef } from "react"
import Header from "../components/UI/Header/Header"
import "./App.scss"
import { useAppDispatch, useAppSelector } from "../hooks/redux"
import Router from "../router/Router"
import { useNavigate } from "react-router-dom"

function App() {
  const dispatch = useAppDispatch()
  // const url = process.env.REACT_APP_URL_SOCKET
  const url = "ws://localhost:3001/"
  const socket = useRef<WebSocket>()
  const navigate = useNavigate()
  const user = useAppSelector((state) => state.user)
  const isCheckedAuth = useRef(false)

  useEffect(() => {
    if (user) {
      // dispatch(getGames())
      socket.current = new WebSocket(url as string)
      const socketOnMessage = createSocketOnMessage(dispatch)
      socket.current.onmessage = socketOnMessage
      socket.current.onclose = () => {
        alert("server close ws connection. Try again later")
        navigate("/")
      }
    }

    if (isCheckedAuth && !user) navigate("/register")
  }, [user])

  useEffect(() => {
    // dispatch(checkUser())
    isCheckedAuth.current = true
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Router />
      </main>
      <footer className="footer"></footer>
    </div>
  )
}

export default App
