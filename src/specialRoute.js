import { Navigate, useLocation, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

//
//
//

function ProtectedRoute() {
  //
  console.log("protected route");
  const token = Cookies.get("token");
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace></Navigate>
  );
}

// 
//
// 

function SignedRoute() {
  //
  console.log("SignedRoute Route run");
  const token = Cookies.get("token");
  const location = useLocation();

  return token ? (
    <Navigate to="/products" state={{ from: location }} replace></Navigate>
  ) : (
    <Outlet />
  );
}

export { ProtectedRoute, SignedRoute };