import React from "react"
import EventsPage from "../pages/EventsPage/EventsPage"
import MainPage from "../pages/MainPage/MainPage"
import NotFoundPage from "../pages/NotFound/NotFoundPage"

export const routes = {
  mainPage: {
    path: "/",
    component: <MainPage />,
  },
  notFoundPage: {
    path: "*",
    component: <NotFoundPage />,
  },
  eventsPage: {
    path: "/events",
    component: <EventsPage />,
  },
}
