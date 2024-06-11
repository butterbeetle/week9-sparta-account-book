import { Navigate, Outlet } from "react-router-dom";
import useLoginStore from "../zustand/login.store";

export default function PrivateRoute() {
  const isLoggedIn = useLoginStore((state) => state.isLoggedIn);
  // console.log("PROTECTED ROUTE LOGGEDIN___", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
