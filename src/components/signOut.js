import { useEffect } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function SignOut() {
  //
  const navigate = useNavigate();
  useEffect(() => {
    Cookies.remove("token");

    setTimeout(() => {
      navigate("/");
    }, 3000);
  });
  return <div>redirect to login page in 3 seconds</div>;
}

export default SignOut;
