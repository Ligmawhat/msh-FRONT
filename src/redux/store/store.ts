import { configureStore } from "@reduxjs/toolkit"
import { composeWithDevTools } from "@reduxjs/toolkit/dist/devtoolsExtension"
import { applyMiddleware, legacy_createStore as createStore } from "redux"
import thunk from "redux-thunk"
import { initState } from "../init/initState"
import { rootReducer } from "../reducers/root/rootReducer"

// export const store = createStore(
//   rootReducer,
//   initState,
//   composeWithDevTools(applyMiddleware(thunk)),
// )

export const store = configureStore({
  reducer: rootReducer,
})
