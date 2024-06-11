import { Outlet, useLoaderData } from "react-router-dom";
import Header from "../components/Header";
import useLoginStore from "../zustand/login.store";

export default function DefaultLayout() {
  const tokenString = localStorage.getItem("token");
  const userData = useLoaderData();
  const setUser = useLoginStore((state) => state.setUser);
  if (tokenString && userData) {
    // console.log("DEFAULT LAYOUT___", userData);
    setUser(userData);
  }

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
