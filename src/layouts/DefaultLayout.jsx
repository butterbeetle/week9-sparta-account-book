import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import useLoginStore from "../zustand/login.store";

export default function DefaultLayout() {
  const nav = useNavigate();
  const accessToken = localStorage.getItem("token");
  const userData = useLoaderData();
  const setUser = useLoginStore((state) => state.setUser);
  // console.log("DEFAULT LAYOUT___", userData);

  useEffect(() => {
    if (userData?.status === 401) {
      console.log("토큰 만료!!");
      localStorage.removeItem("token");
      nav("/login", { replace: true });
    } else if (accessToken && userData) {
      setUser(userData);
    }
  }, [userData, accessToken, setUser, nav]);

  return (
    <>
      <Header />
      <main className="p-3 max-w-[800px] min-h-[800px] mx-auto flex flex-col gap-3">
        <Outlet />
        <div id="portal" />
      </main>
    </>
  );
}
