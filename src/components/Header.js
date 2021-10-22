import React from "react";

function Header(props) {
  return (
    // header
    <header>
      <div className="menu-dot"></div>
      <ul className="nav-dot">
        <li className="nav-item">
          <a href="#project">projects</a>
        </li>
        <li className="nav-item">
          <a href="#contact">contact</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
