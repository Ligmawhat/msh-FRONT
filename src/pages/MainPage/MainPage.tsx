import React, { FC, useEffect, useState } from "react"
import "./MainPage.scss"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Button from "../../components/common/Button/Button"

//Удалить это mock
interface NewsItem {
  source: {
    id: number
    name: string
  }
  author: string
  title: string
  description: string
  url: string
  urlToImage: string
  publishedAt: string
  content: string
}

const apikey = "64569a53da124124b14e7cbbb71d210a"
const api =
  "https://newsapi.org/v2/everything?q=tesla&from=2022-05-10&sortBy=publishedAt&apiKey=64569a53da124124b14e7cbbb71d210a"

const MainPage: FC = () => {
  const [news, setNews] = useState<NewsItem[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(api).then((res) => setNews(res.data.articles))
  }, [])

  return (
    <div className="mainpage">
      <section className="mainpage__landing landing">
        <h1 className="landing__title">Стань волонтером прямо сейчас</h1>
        <div className="landing__buttons">
          <Button text={"Регистрация"} onClick={() => navigate("/register")} />
          <Button text={"Войти"} onClick={() => navigate("/login")} />
        </div>
      </section>
      <section className="mainpage__news news">
        {news &&
          news.slice(0, 9).map((el) => (
            <div key={el.source.id} className="news__item">
              <div className="news__left">
                <img
                  src={el.urlToImage || ""}
                  alt="news img"
                  className="news__img"
                />
              </div>
              <div className="news__right">
                <h2 className="news__title">{el.title}</h2>
              </div>
            </div>
          ))}
      </section>
    </div>
  )
}

export default MainPage
