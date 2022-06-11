import React from "react"
import Header from "../components/UI/Header/Header"
import "./App.scss"
import Router from "../router/Router"

function App() {
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
