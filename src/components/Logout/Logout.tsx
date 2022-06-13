import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { logoutUser } from "../../redux/actions/currUserActions"
import Button from "../common/Button/Button"

function Logout() {
  const dispatch = useAppDispatch()

  const navigate = useNavigate()
  const logout = () => {
    axios({
      method: "post",
      withCredentials: true,
      url: `${process.env.REACT_APP_CLIENT_URL}/user/logout`,
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        return (
          dispatch(logoutUser()),
          localStorage.clear(),
          sessionStorage.clear(),
          navigate("/")
        )
      } else {
        console.error("failed")
      }
    })
  }

  return (
    <div>
      <div>Вы действительно хотите выйти из аккаунта?</div>
      <Button text="Выйти" onClick={logout} />
    </div>
  )
}

export default Logout
