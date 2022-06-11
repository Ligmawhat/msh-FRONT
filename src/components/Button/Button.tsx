import React, { FC } from "react"
import "./Button.scss"

interface ButtonProps {
  text: string
  type?: "button" | "submit" | "reset"
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
}

const Button: FC<ButtonProps> = ({ text, onClick, disabled, type }) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? "button button--disabled" : "button"}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
