import React, { FC } from "react"

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
  return (
    <div
      role="navigation"
      onClick={closeHandler}
      className="burger__item item "
    >
      <span onClick={() => navigate("/")}>
        <img src={imgLink} alt="nav icon" className="item__icon" />
        <div className="item__text">{text}</div>
      </span>
    </div>
  )
}

export default BurgerItem
