import { Navigate, Outlet } from "react-router-dom";
import useMe from "../hooks/useMe";

export default function ProtectedRoute() {
  const { isLoggedIn, accessToken } = useMe();
  // const token = localStorage.getItem("token");
  // console.log("PROTECTED ROUTE LOGGEDIN___", isLoggedIn, token ? true : false);

  if (!accessToken && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
