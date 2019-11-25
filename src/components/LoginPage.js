import React from "react";
import Icon from "../lib/Icon";
import { Link } from "react-router-dom";
import "../styles/homepage.css";

function LoginPage(props) {
  return (
    <header>
      <h1>
        <Icon icon="angle-double-left"></Icon> EmpowHER{" "}
        <Icon icon="angle-double-right"></Icon>
      </h1>
    </header>
  );
}

export default LoginPage;
