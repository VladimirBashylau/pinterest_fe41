import { combineReducers, createStore } from "redux";
import userReducer from "./reducers/user"

export const rootReducer = combineReducers({
  user: userReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = createStore(rootReducer);
