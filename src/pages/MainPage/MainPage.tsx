import React, { FC, useState } from "react"
import "./MainPage.scss"
import { useNavigate } from "react-router-dom"
import ChooseRole from "../../components/ChooseRole/ChooseRole"
import Button from "../../components/common/Button/Button"
import { Modal } from "../../components/common/TmpModal/TmpModal"

const MainPage: FC = () => {
  const navigate = useNavigate()

  const [openModal, setOpenModal] = useState(false)

  function modalHandler() {
    setOpenModal(!openModal)
  }
  return (
    <>
      <Modal
        shown={openModal}
        close={() => {
          setOpenModal(false)
        }}
      >
        <ChooseRole />
      </Modal>
      <div className="mainpage">
        <video autoPlay muted loop className="background-video">
          <source src="/assets/videos/background.mp4" type="video/mp4" />
        </video>
        <section className="mainpage__landing landing">
          <h1 className="landing__title">Стань волонтером прямо сейчас</h1>
          <div className="landing__buttons">
            <Button text={"Регистрация"} onClick={modalHandler} />
            <Button text={"Войти"} onClick={() => navigate("/login")} />
          </div>
        </section>
      </div>
    </>
  )
}

export default MainPage
