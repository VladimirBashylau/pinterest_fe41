import { postsReducer } from "./reducers/posts";
import { combineReducers, createStore, applyMiddleware } from "redux";
import userReducer from "./reducers/user";
import loginReducer from "./reducers/login";
import registerReducer from "./reducers/register";
import verificationReducer from "./reducers/verification";
import headerReducer from "./reducers/header";
import postsSearch from "./reducers/postsSearch";
import SearchReducer from "./reducers/searchState";
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  register: registerReducer,
  verify: verificationReducer,
  posts: postsReducer,
  header: headerReducer,
  postSearch: postsSearch,
  searchState: SearchReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = createStore(rootReducer, applyMiddleware(thunk));
