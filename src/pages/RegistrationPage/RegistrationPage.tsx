import React, { FC, useState } from "react"
import Button from "../../components/common/Button/Button"
import Input from "../../components/common/Input/Input"
import "./RegistrationPage.scss"

const RegistrationPage: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  })

  const { email, name, password } = formData

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="authorization">
      <div className="authorization__top">
        <h1 className="authorization__title">Getting Started</h1>
        <h2 className="authorization__subtitle">
          Create an account and connect with the people
        </h2>
      </div>
      <div className="authorization__mid">
        <Input
          placeholder={"Your Email"}
          value={email}
          onChange={onChangeInput}
          name={"email"}
          type={"email"}
        />
        <Input
          placeholder={"Your Name"}
          value={name}
          onChange={onChangeInput}
          name={"name"}
        />
        <Input
          placeholder={"Create Password"}
          value={password}
          onChange={onChangeInput}
          name={"password"}
          type={"password"}
        />
        <Button text={"Sign Up"} onClick={() => null} />
      </div>
      <div className="authorization__bottom">
        <div className="authorization__subtitle">Already have an account ?</div>
        <div className="authorization__alter">
          <Button text={"Sign In"} onClick={() => null} />
        </div>
      </div>
    </div>
  )
}

export default RegistrationPage
