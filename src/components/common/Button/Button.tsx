import React, { FC } from "react"
import "./Button.scss"

interface ButtonProps {
  text: string
  type?: "button" | "submit" | "reset"
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  width?: number
}

const Button: FC<ButtonProps> = ({
  text,
  onClick,
  disabled,
  type,
  width = 200,
}) => {
  return (
    <button
      disabled={disabled}
      className={disabled ? "button button--disabled" : "button"}
      type={type}
      onClick={onClick}
      style={{ maxWidth: `${width}` }}
    >
      {text}
    </button>
  )
}

export default Button
