import React from "react";
import Logo from "./logo";
import Formulario from "./formulario";

function LoginBox({ onLogin }) {
  return (
    <div className="mt-10">
      <Logo />
      <br />
      <Formulario onLogin={onLogin}/>
    </div>
  );
}

export default LoginBox;
