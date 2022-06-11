import React, { FC, useEffect } from "react"
import "./Burger.scss"
import { useNavigate } from "react-router-dom"
import BurgerItem from "./BurgerItem"

const homeLink = "https://cdn-icons-png.flaticon.com/512/25/25694.png"
const eventsLink = "https://cdn-icons-png.flaticon.com/512/48/48732.png"
const registrationLink =
  "https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/new-registration.png"

interface BurgerProps {
  menuOpen: boolean
  setMenuOpen: (bool: boolean) => void
}

const Burger: FC<BurgerProps> = ({ menuOpen, setMenuOpen }) => {
  const closeHandler = () => setMenuOpen(false)
  const navigate = useNavigate()
  useEffect(() => {
    console.log(window.location.href)
  }, [])

  return (
    <div className="right__burger burger ">
      <aside>
        <div
          className={
            menuOpen ? "burger__list burger__list--active" : "burger__list"
          }
        >
          <BurgerItem
            closeHandler={closeHandler}
            navigate={() => navigate("/")}
            imgLink={homeLink}
            text={"Home"}
          />
          <BurgerItem
            closeHandler={closeHandler}
            navigate={() => navigate("/events")}
            imgLink={eventsLink}
            text={"Events"}
          />
          <BurgerItem
            closeHandler={closeHandler}
            navigate={() => navigate("/register")}
            imgLink={registrationLink}
            text={"Sign Up"}
          />
          <BurgerItem
            closeHandler={closeHandler}
            navigate={() => navigate("/login")}
            imgLink={registrationLink}
            text={"Sign In"}
          />
        </div>
      </aside>
    </div>
  )
}

export default Burger
