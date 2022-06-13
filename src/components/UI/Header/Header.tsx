import React, { FC, useState } from "react"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../hooks/redux"
import Input from "../../common/Input/Input"
import Burger from "../Burger/Burger"

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const burgerHandler = () => setMenuOpen((prev) => !prev)
  const navigate = useNavigate()
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)

  return (
    <header className={`header ${isThemeBlack && "_black"}`}>
      <img
        onClick={() => navigate("/")}
        src="assets/svg/logo.svg"
        alt="logo"
        className="header__logo"
      />
      <div className="header__search">
        <Input placeholder={"Найти доброе дело или организацию"} />
      </div>
      <Burger menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div
        onClick={burgerHandler}
        className={menuOpen ? "hamburger active" : "hamburger"}
      >
        <span className="line1" />
        <span className="line2" />
        <span className="line3" />
      </div>
    </header>
  )
}

export default Header
