import React, { FC } from "react"

interface ButtonProps {
  clicked?: boolean
  text: string
  type?: "button" | "submit" | "reset"
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void
  disabled?: boolean
  width?: number
}

const TransparentButton: FC<ButtonProps> = ({
  clicked,
  text,
  onClick,
  disabled,
  type,
  width = 200,
}) => {
  return (
    <button
      disabled={disabled}
      className={
        disabled
          ? "button button--disabled button--transparent"
          : clicked
          ? "button button--clicked"
          : "button button--transparent"
      }
      type={type}
      onClick={onClick}
      style={{ maxWidth: `${width}` }}
    >
      {text}
    </button>
  )
}

export default TransparentButton
