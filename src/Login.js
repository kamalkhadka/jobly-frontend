import React from "react";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

const Login = ({ setToken }) => {
  return (
    <div className="row text-left">
      <div className="col border-right">
        <LoginForm setToken={setToken} />
      </div>
      <div className="col">
        <SignupForm setToken={setToken} />
      </div>
    </div>
  );
};

export default Login;
