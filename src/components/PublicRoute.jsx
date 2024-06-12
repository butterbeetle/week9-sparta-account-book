import { Navigate, Outlet } from "react-router-dom";
import useMe from "../hooks/useMe";

export default function PublicRoute() {
  const { isLoggedIn } = useMe();
  const token = localStorage.getItem("token");
  // console.log("PROTECTED ROUTE LOGGEDIN___", isLoggedIn);

  if (token || isLoggedIn) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
