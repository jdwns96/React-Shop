import React from "react";

// layout
import LoginLayout from "@components/template/LoginLayout";

//component
import LoginComponent from "@components/login";

const Login = () => {
  return (
    <LoginLayout>
      <LoginComponent />
    </LoginLayout>
  );
};

export default Login;
