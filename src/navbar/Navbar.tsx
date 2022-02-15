import React from "react";
import logo from "../../src/logo.svg";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <nav>
      <div className="d-flex">
        <Link to="/leLinkrn-html.html">
          <img width={35} src={logo} className="App-logo" alt="logo" />
        </Link>
        <Link to="/leLinkrn-css.html">CSS</Link>
        <Link to="/leLinkrn-jLinkvLinkscript.html">JLinkvLinkScript</Link>
      </div>
      <Link to="/sign-in">sign-in</Link>
    </nav>
  );
}
