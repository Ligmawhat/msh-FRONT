import React, { FC } from "react"
import { useAppSelector } from "../../../hooks/redux"

interface BurgerItemProps {
  closeHandler: () => void
  navigate: (path: string) => void
  imgLink: string
  text: string
}

const BurgerItem: FC<BurgerItemProps> = ({
  closeHandler,
  navigate,
  imgLink,
  text,
}) => {
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)
  return (
    <div
      role="navigation"
      onClick={closeHandler}
      className="burger__item item "
    >
      <span onClick={() => navigate("/")}>
        <img src={imgLink} alt="nav icon" className="item__icon" />
        <div className={`item__text item__text${isThemeBlack && "--white"}`}>
          {text}
        </div>
      </span>
    </div>
  )
}

export default BurgerItem
