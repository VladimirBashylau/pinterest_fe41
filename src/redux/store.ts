import { combineReducers, createStore ,applyMiddleware} from "redux";
import userReducer from './reducers/user';
import loginReducer from './reducers/login';
import registerReducer from './reducers/register';
import verificationReducer from "./reducers/verification";
import { postsReducer } from "./reducers/posts";
import thunk from "redux-thunk";
export const rootReducer = combineReducers({
  user: userReducer,
  login: loginReducer,
  register: registerReducer,
  verify: verificationReducer,
  posts: postsReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const store = createStore(rootReducer, applyMiddleware(thunk));
