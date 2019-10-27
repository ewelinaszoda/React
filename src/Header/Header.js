import React from "react";
import "./Header.css";

function Header(props) {
  return <h2 className="header">This header name is: {props.headerName}</h2>;
}

export default Header;
