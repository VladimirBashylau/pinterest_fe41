import { Outlet } from "react-router-dom";
// import { useEffect } from "react";
// import { LOCAL_STORAGE_KEYS } from "../services/keys";
// import { authService } from "../services/auth";
// import { useDispatch } from "react-redux";
// import { setUser } from "../store/actions/user";
import Header from "./Header/Header";

export const Root = () => {
  // const dispath = useDispatch();

  // const authUser = async () => {
  //   const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

  //   if (accessToken) {
  //     try {
  //       const { data } = await authService.getCurrentUser();

  //       dispath(setUser(data));
  //     } catch (error) {}
  //   }
  // };

  // useEffect(() => {
  //   authUser();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  return (
    <div>
      <div>
        <Header />
        <main className="content">
          <Outlet />
        </main>
      </div>
    </div>
  );
};
