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
      <Route
        path={routes.eventsPage.path}
        element={routes.eventsPage.component}
      />
      <Route
        path={routes.tmpUploadPage.path}
        element={routes.tmpUploadPage.component}
      />
    </Routes>
  )
}

export default Router
