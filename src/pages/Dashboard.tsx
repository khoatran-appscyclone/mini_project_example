import React from "react";
import useAuth from "../hooks/useAuth";

const Dashboard: React.FC = () => {
  const auth = useAuth();
  return (
    <h1>
      Dashboard (Private)
      <button onClick={auth.handleLogout}>logout</button>
    </h1>
  );
};

export default Dashboard;
