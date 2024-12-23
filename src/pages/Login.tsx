import React from "react";
import useAuth from "../hooks/useAuth";

const Login: React.FC = () => {
  const auth = useAuth();

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={auth.handleLogin}>Login</button>
    </div>
  );
};

export default Login;
