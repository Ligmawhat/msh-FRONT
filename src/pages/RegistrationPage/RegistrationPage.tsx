import React, { FC, useState } from "react"
import axios from "axios"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import Button from "../../components/common/Button/Button"
import Input from "../../components/common/Input/Input"
import "./RegistrationPage.scss"
import { useAppDispatch } from "../../hooks/redux"
import { ACTION_setCurrUser } from "../../redux/actions/currUserActions"

const RegistrationPage: FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    password: "",
  })
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const { email, name, password } = formData

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const register = () => {
    axios({
      method: "post",
      data: formData,
      withCredentials: true,
      url: "/user/registration",
    }).then((res) => {
      if (res?.data?.user?.id) {
        console.log(res.data.user.id, res.data.user.email)
        // localStorage.setItem("user", JSON.stringify(res.data)),
        navigate("/events")
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        //@ts-ignore
        dispatch(ACTION_setCurrUser(res.data.user.id, res.data.user.email))
      } else {
        console.log("failed")
      }
    })
  }

  // const register = async () => {
  //   try {
  //     console.log(1)
  //     const response = await fetch("/user/registration", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       method: "POST",
  //       body: JSON.stringify(formData),
  //     })
  //     const json = await response.json()
  //     console.log(json)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }

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
        <Button text={"Sign Up"} onClick={() => register()} />
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

export default RegistrationPage
