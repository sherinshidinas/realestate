import React, { useState } from "react";

import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
        <img src="../images/logofoton2.png" alt="Logo" />
        </a>

        <a href="">Home</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Agents</a>
      </div>
      <div className="right">
        <a href="">Sign in</a>
        <a className="signup" href="">
          Sign up
        </a>

        <div className="menuIcon">
          <img src="../images/menu.png" alt="" onClick={() => setOpen(!open)} />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Contact</a>
          <a href="">Agents</a>
          <a href="">Sign In</a>
          <a href="">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
