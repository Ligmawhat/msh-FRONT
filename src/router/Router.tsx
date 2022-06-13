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
      <Route
        path={routes.registrationPage.path}
        element={routes.registrationPage.component}
      />
      <Route
        path={routes.authorizationPage.path}
        element={routes.authorizationPage.component}
      />
      <Route path={routes.tmpModal.path} element={routes.tmpModal.component} />
      <Route
        path={routes.profileRoutes.path}
        element={routes.profileRoutes.component}
      />
      <Route
        path={routes.profileInfo.path}
        element={routes.profileInfo.component}
      />
      <Route
        path={routes.chatsPage.path}
        element={routes.chatsPage.component}
      />
    </Routes>
  )
}

export default Router
