import React, { FC, useState } from "react"
import "./Header.scss"
import { useNavigate } from "react-router-dom"
import Burger from "../Burger/Burger"

const mockLogo =
  "https://www.lter-europe.net/document-archive/image-gallery/albums/logos/TwitterLogo_55acee.png/image"
const mockUser =
  "https://carouselcenter.org/wp-content/uploads/2017/01/blank-human-image.png"

const Header: FC = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const burgerHandler = () => setMenuOpen((prev) => !prev)
  const navigate = useNavigate()

  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        src={mockLogo}
        alt="logo"
        className="header__logo"
      />
      <div className="header__search">
        <input
          placeholder="Найти доброе дело или организацию"
          className="header__input"
          type="text"
        />
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
