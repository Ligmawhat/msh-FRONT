import React, { FC } from "react"
import "./Header.scss"

const mockLogo =
  "https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png"
const mockUser =
  "https://carouselcenter.org/wp-content/uploads/2017/01/blank-human-image.png"

const Header: FC = () => {
  return (
    <header className="header">
      <img src={mockLogo} alt="logo" className="header__logo" />
      <div className="header__search">
        <input
          placeholder="Найти доброе дело или организацию"
          className="header__input"
          type="text"
        />
      </div>
      <div className="header__auth">
        <img src={mockUser} alt="user" className="header__user" />
      </div>
    </header>
  )
}

export default Header
