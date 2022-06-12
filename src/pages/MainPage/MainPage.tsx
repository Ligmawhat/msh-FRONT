import React, { FC } from "react"
import "./MainPage.scss"
import { useNavigate } from "react-router-dom"
import Button from "../../components/common/Button/Button"

const MainPage: FC = () => {
  const navigate = useNavigate()

  return (
    <div className="mainpage">
      <video autoPlay muted loop className="background-video">
        <source src="/assets/videos/background.mp4" type="video/mp4" />
      </video>
      <section className="mainpage__landing landing">
        <h1 className="landing__title">Стань волонтером прямо сейчас</h1>
        <div className="landing__buttons">
          <Button text={"Регистрация"} onClick={() => navigate("/register")} />
          <Button text={"Войти"} onClick={() => navigate("/login")} />
        </div>
      </section>
    </div>
  )
}

export default MainPage
