import React, { useState } from "react";

import "./navbar.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const user = true;
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
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="userImage"
            />
            <span>Shidinas</span>
            <Link to="/profile" className="profileButton">
              <div className="notification">3</div>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <a href="">Sign in</a>
            <a className="signup" href="">
              Sign up
            </a>
          </>
        )}

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
