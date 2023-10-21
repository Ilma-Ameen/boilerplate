import IAInput from "../components/IAInput";
import IAButton from "../components/IAButton";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginMethod } from "../config/firebasemethods";

export default function Login() {
  const [logindata, setLogindata] = useState({});
  const navigate = useNavigate();

  const fillModel = (key, val) => {
    logindata[key] = val;
    setLogindata({ ...logindata });
  };

  let LoginUser = () => {
    console.log(logindata);
    LoginMethod(logindata)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div className="container-form shadow rounded">
        <form className="form">
          <h1>Login</h1>
          <div className="input-form">
            <IAInput
              label="Email"
              variant="outlined"
              color="secondary"
              type="email"
              sx={{ width: "100%" }}
              value={logindata.email || ""}
              onchange={(e) =>
                setLogindata({ ...fillModel, email: e.target.value })
              }
            />
          </div>
          <div className="input-form">
            <IAInput
              label="Password"
              variant="outlined"
              color="secondary"
              type="password"
              sx={{ width: "100%" }}
              value={logindata.password || ""}
              onchange={(e) =>
                setLogindata({ fillModel, password: e.target.value })
              }
            />
          </div>
          <div>
            <IAButton
              variant="contained"
              color="secondary"
              onclick={LoginUser}
            >
              Login
            </IAButton>
          </div>
        </form>
      </div>
    </div>
  );
}