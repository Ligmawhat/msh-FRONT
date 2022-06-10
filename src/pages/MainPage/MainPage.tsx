import React, { FC } from "react"
import "./MainPage.scss"

const MainPage: FC = () => {
  return (
    <div className="mainpage">
      <div className="mainpage__landing landing">
        <h1 className="landing__title">Стань волонтером прямо сейчас</h1>
        <div className="landing__buttons">
          <button className="landing__button">Регистрация</button>
          <button className="landing__button">Войти</button>
        </div>
      </div>
    </div>
  )
}

export default MainPage
