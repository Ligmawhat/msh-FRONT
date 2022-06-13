import * as React from "react"
import { useAppSelector } from "../../../hooks/redux"
import { feedback } from "../../../mocks/userProfile"
import "./Achievements.scss"

function Achievements() {
  const isThemeBlack = useAppSelector((s) => s.isThemeBlack)

  return (
    <div className="achievements">
      <div className={`achievements__top ${isThemeBlack && "_black-light"}`}>
        {feedback.map((el, i) => (
          <div
            key={i}
            className={`contact ${isThemeBlack && "contact--black"}`}
          >
            <img src={el.companyPic} alt="contact" className="contact__img" />
            <div className="contact__mid">
              <h4 className="contact__name">{el.companyName}</h4>
              <h5 className="contact__message-preview">{el.comment}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="achievements__boottom"></div>
    </div>
  )
}

export default Achievements
