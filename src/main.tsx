import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Root } from "./layout";
import { Routes } from "./constans/Routes";
import Home from "./pages/Home";
import PostItem from "./pages/PostItem/PostItem";
import Verify from "./components/verify";
import CreatePinPage from "./pages/Create/CreatePinPage";

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
      {
        path: Routes.Verify,
        element: <Verify />,
      },
      {
        path: Routes.PostItem,
        element: <PostItem />,
      },
      {
        path: Routes.Create,
        element: <CreatePinPage />,
      },
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
