import { Navigate, Outlet } from "react-router-dom";
import useMe from "../hooks/useMe";

export default function PrivateRoute() {
  const { isLoggedIn } = useMe();
  // console.log("PROTECTED ROUTE LOGGEDIN___", isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}
