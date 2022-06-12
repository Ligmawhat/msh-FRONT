import { configureStore } from "@reduxjs/toolkit"
// import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
// import { initState } from "../init/initState"
// import { filterReducer } from "../reducers/filterReducer"
// import { userReducer } from "../reducers/userReducer"
import { rootReducer } from "./../reducers/root/rootReducer"

// export const store = createStore(
//   rootReducer,
//   initState,
//   composeWithDevTools(applyMiddleware(thunk)),
// )

export const store = configureStore({
  reducer: rootReducer,
})
