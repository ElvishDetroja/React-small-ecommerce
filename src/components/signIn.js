import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

//
//
//

function SignIn() {
  //
  const navigate = useNavigate();

  const [info, setInfo] = useState({});

  const [user, setUser] = useState();
  const [error, setError] = useState();

  function handleValue(e) {
    setInfo({ ...info, [e.target.name]: e.target.value });
  }

  async function handleSubmit() {
    try {
      setError("");
      const { data } = await axios.post("https://dummyjson.com/auth/login", {
        username: info.email,
        password: info.password,
      });

      if (data.token) {
        Cookies.set("token", data.token);
      }
      setUser(data);
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  }

  useEffect(() => {
    if (user?.token) {
      navigate("/products");
    }
  }, [user]);

  return (
    <>
      <div className="form-cover">
        <div className="form-container">
          <h1>Sign In</h1>

          <input
            type="text"
            name="email"
            id="email"
            placeholder="email"
            value={info?.email || ""}
            className="sign-text"
            onChange={(e) => {
              handleValue(e);
            }}
          />

          <input
            type="password"
            name="password"
            id="password"
            placeholder="password"
            value={info?.password || ""}
            className="sign-text"
            onChange={(e) => {
              handleValue(e);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleSubmit();
              }
            }}
          />

          <button onClick={handleSubmit} className="sign-btn">
            Sign In
          </button>

          <p>{error}</p>
        </div>
      </div>
    </>
  );
}

export default SignIn;
