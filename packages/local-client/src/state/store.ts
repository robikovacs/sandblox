import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { persistMiddleware } from "./middlewares/persist-middleware";
import reducers from "./reducers";

export const store = createStore(
  reducers,
  {},
  applyMiddleware(persistMiddleware, thunk)
);
