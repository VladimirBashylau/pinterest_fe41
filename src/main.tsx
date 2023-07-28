import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./layout";
import { Routes } from "./constans/Routes";
import Home from "./pages/Home";
// import Register from "./pages/Register";
import Post from "./pages/Post";
import PostItem from "./pages/PostItem/PostItem";

// sass installation: npm install node-sass

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: Routes.Home,
        element: <Home />,
      },
      // {
      //   path: Routes.Register,
      //   element: <Register />,
      // },
      // {
      //   path: Routes.Login,
      //   element: <Login />,
      // },
      // {
      //   path: Routes.Verify,
      //   element: <Verify />,
      // },
      {
        path: Routes.PostItem,
        element: <PostItem />,
      },
      // {
      //   path: Routes.AddPost,
      //   element: <AddPost />,
      // },
    ],
  },
]);

const Base = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
};

root.render(<Base />);
