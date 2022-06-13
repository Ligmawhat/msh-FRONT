import React, { FC, useEffect } from "react"
import "./Burger.scss"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../../hooks/redux"
import DarkModeButton from "../DarkModeButton/DarkModeButton"
import BurgerItem from "./BurgerItem"

const homeLink = "https://cdn-icons-png.flaticon.com/512/25/25694.png"
const eventsLink = "https://cdn-icons-png.flaticon.com/512/48/48732.png"
const registrationLink =
  "https://uxwing.com/wp-content/themes/uxwing/download/03-editing-user-action/new-registration.png"
const chatsLink = "https://cdn-icons-png.flaticon.com/512/1380/1380370.png"

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
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)

  const user = useAppSelector((state) => state.currUser)

  return (
    <div className={`right__burger burger ${isThemeBlack && "_black"}`}>
      <aside>
        <div
          className={
            menuOpen
              ? `burger__list burger__list--active ${
                  isThemeBlack && "_black-light"
                }`
              : "burger__list"
          }
        >
          <DarkModeButton />
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
            navigate={() => navigate("/chats")}
            imgLink={chatsLink}
            text={"Chats"}
          />
          {!user && (
            <>
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
            </>
          )}
          {user && (
            <BurgerItem
              closeHandler={closeHandler}
              navigate={() => navigate("/logout")}
              imgLink={registrationLink}
              text={"Logout"}
            />
          )}
        </div>
      </aside>
    </div>
  )
}

export default Burger
