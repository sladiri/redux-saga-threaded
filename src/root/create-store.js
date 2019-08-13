import { createStore, applyMiddleware } from "redux";
import { reducer } from "./ui/reducer";
import { createRootState } from "./create-root-modules";

const customMiddleWare = (store) => (next) => (action) => {
  console.log("Middleware triggered:", action);
  next(action);
};

export const store = createStore(
  reducer(createRootState()),
  applyMiddleware(customMiddleWare),
);
