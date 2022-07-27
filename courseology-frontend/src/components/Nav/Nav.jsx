import React from "react";
import { Link } from "react-router-dom";
import "./Nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <Link className="nav__item" to="/">
        Home
      </Link>

      <Link className="nav__item" to="/courses">
        Courses
      </Link>

      <Link className="nav__item" to="/update">
        Update
      </Link>
    </div>
  );
};

export default Nav;
