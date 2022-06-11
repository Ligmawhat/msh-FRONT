import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "../../components/common/Button/Button"
import Input from "../../components/common/Input/Input"

const AuthorizationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const { email, password } = formData

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="authorization">
      <div className="authorization__top">
        <h1 className="authorization__title">Sign in</h1>
        <h2 className="authorization__subtitle">
          Welcome back, You have been missed!
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
          placeholder={"Create Password"}
          value={password}
          onChange={onChangeInput}
          name={"password"}
          type={"password"}
        />
        <Button text={"Sign In"} onClick={() => null} />
      </div>
      <div className="authorization__bottom">
        <div className="authorization__subtitle">Already have an account ?</div>
        <div className="authorization__alter">
          <Button text={"Sign In"} onClick={() => navigate("/login")} />
        </div>
      </div>
    </div>
  )
}

export default AuthorizationPage
