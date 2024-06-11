import { Navigate, Outlet } from "react-router-dom";
import useLoginStore from "../zustand/login.store";

export default function PublicRoute() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  // console.log("PROTECTED ROUTE LOGGEDIN___", isLoggedIn);

  if (isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
