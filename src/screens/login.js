import React, { useState } from "react";
import ReactDOM from "react-dom";

const email = "sakshi@gmail.com";
const password = "sakshi";

function Login() {
  const [userEmail, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const handleEmail = (e) => {
    setUserName(e.target.value);
    console.log(e.target.value);
  };

  const handlePassword = (e) => {
    setUserPassword(e.target.value);
    console.log(e.target.value);
  };

  const handleLogin = () => {
    if (userEmail === email && userPassword === password) {
      console.log("login success");
    } else {
      alert("invalid");
    }
  };
  return (
    <div>
      <div className="loginContainer col-md-5">
        <h1 className="head">Login</h1>
        <div className="form">
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              placeholder="Enter your EmailID"
              onChange={(e) => handleEmail(e)}
              className="form-control"
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              placeholder="Enter your Password"
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <div className="mb-3">
            <button className="btn " onClick={() => handleLogin()}>
              Login
            </button>
            <div className="float-end">
              <a href="/password"> Forget Password? </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
// ReactDOM.render(login(), document.getElementById("root"));
