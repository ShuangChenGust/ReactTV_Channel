import React, { useState, useEffect } from "react";
import "./Nav.css";
import reactlog from "./logo192.png";

function Navbar() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className="nav__logo" src={reactlog} alt="TV logo" />
      <img
        className="nav_avatar"
        src="https://image.simplecastcdn.com/images/fd1212b1-7d08-4c5a-8506-00188a4c6528/a1f51025-7e57-4b41-8c2b-d613a0238148/3000x3000/simplecast-img-v3.jpg?aid=rss_feed"
        alt="Person Logo"
      />
    </div>
  );
}

export default Navbar;
