import { Outlet } from "react-router-dom";
import Header from "../components/Header";

export default function DefaultLayout() {
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
