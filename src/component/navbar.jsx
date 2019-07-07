import React from "react";

//stateless functional components : sfc
//if components dose not state => delete class and create arrow function and return
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="/" className="navbar-navbar">
        NavBar{" "}
        <span className="badge badge-pill badge-secondary">
          {props.tolalCounters}
        </span>
      </a>
    </nav>
  );
};

export default NavBar;
