import React, { FC } from "react"
import "./Burger.scss"
import { useNavigate } from "react-router-dom"

const homeLink = "https://cdn-icons-png.flaticon.com/512/25/25694.png"
const eventsLink = "https://cdn-icons-png.flaticon.com/512/48/48732.png"

interface BurgerProps {
  menuOpen: boolean
  setMenuOpen: (bool: boolean) => void
}

const Burger: FC<BurgerProps> = ({ menuOpen, setMenuOpen }) => {
  const closeHandler = () => setMenuOpen(false)
  const navigate = useNavigate()
  const navigateHandler = (link: string) => navigate(link)

  return (
    <div className="right__burger burger ">
      <aside>
        <div
          className={
            menuOpen ? "burger__list burger__list--active" : "burger__list"
          }
        >
          <div
            role="navigation"
            onClick={closeHandler}
            className="burger__item item "
          >
            <span onClick={() => navigateHandler("/")}>
              <img src={homeLink} alt="nav icon" className="item__icon" />
              <div className="item__text">Home</div>
            </span>
          </div>
          <div
            role="navigation"
            onClick={closeHandler}
            className="burger__item item "
          >
            <span onClick={() => navigateHandler("/events")}>
              <img src={eventsLink} alt="nav icon" className="item__icon" />
              <div className="item__text">Events</div>
            </span>
          </div>
        </div>
      </aside>
    </div>
  )
}

export default Burger
