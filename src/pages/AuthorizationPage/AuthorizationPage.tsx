import React, { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Button from "../../components/common/Button/Button"
import Input from "../../components/common/Input/Input"
import { useAppSelector } from "../../hooks/redux"
import { ACTION_setCurrUser } from "../../redux/actions/currUserActions"

const AuthorizationPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })
  const navigate = useNavigate()

  const { email, password } = formData
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const login = () => {
    axios({
      method: "post",
      data: formData,
      withCredentials: true,
      url: `/user/login`,
    }).then((res) => {
      if (res?.data?.user?.id) {
        localStorage.setItem("user", JSON.stringify(res.data.user)),
          navigate("/events")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        dispatch(ACTION_setCurrUser(res.data.user.id, res.data.user.email))
      } else {
        console.log("failed")
      }
    })
  }

  return (
    <div className="authorization">
      <div className="authorization__top">
        <h1 className="authorization__title">Sign in</h1>
        <h2 className="authorization__subtitle">
          Welcome back, You have been missed!
        </h2>
      </div>
      <div className={`authorization__mid ${isThemeBlack && "_black-light"}`}>
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
        <Button text={"Sign In"} onClick={() => login()} />
      </div>
      <div className="authorization__bottom">
        <div className="authorization__subtitle">
          You have not any account ?
        </div>
        <div className="authorization__alter">
          <Button text={"Sign Up"} onClick={() => navigate("/register")} />
        </div>
      </div>
    </div>
  )
}

export default AuthorizationPage
