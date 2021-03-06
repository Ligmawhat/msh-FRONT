import React, { FC } from "react"
import { Route, Routes } from "react-router-dom"
import { routes } from "./routes"

const Router: FC = () => {
  return (
    <Routes>
      <Route path={routes.mainPage.path} element={routes.mainPage.component} />
      <Route
        path={routes.notFoundPage.path}
        element={routes.notFoundPage.component}
      />
    </Routes>
  )
}

export default Router
