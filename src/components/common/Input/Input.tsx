import React, { memo } from "react"
import "./Input.scss"

interface InputProps {
  name?: string
  value?: string | number
  placeholder?: string
  error?: string | boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  type?: "text" | "number" | "time" | "password" | "email"
  upperCase?: boolean
  width?: string | number
  id?: number
  disabled?: boolean
}

const Input: React.FC<InputProps> = ({
  name,
  value = "",
  error,
  placeholder,
  onChange,
  type = "text",
  upperCase,
  width,
  id,
  disabled,
}) => {
  return (
    <label htmlFor={name} className="field-text" style={{ maxWidth: width }}>
      <input
        disabled={disabled}
        className="field-text__input"
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        data-id={id}
        value={value}
        onChange={(e) => {
          upperCase ? (e.target.value = e.target.value.toUpperCase()) : null
          onChange ? onChange(e) : null
        }}
        style={{ border: error ? "1px solid red" : 0 }}
      />
      {typeof error === "string" && error && (
        <span className="field-text__error">{error}</span>
      )}
    </label>
  )
}

export default memo(Input)
