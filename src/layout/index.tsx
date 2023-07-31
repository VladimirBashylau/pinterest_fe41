import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import { LOCAL_STORAGE_KEYS } from "../services/keys";
// import { authService } from "../services/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/actions/user";
import Header from "./Header/Header";
import { useSelector } from "react-redux";
import Login from "../components/login";
import Register from "../components/register";

export const Root = () => {
  let loginSelector: string = useSelector((state: any) => state.login.login);
  let registerSelector: string = useSelector(
    (state: any) => state.register.register
  );

  return (
    <div>
      <div>
        <Header />
        {loginSelector === "open" ? <Login /> : ""}
        {registerSelector === "open" ? <Register /> : ""}
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
