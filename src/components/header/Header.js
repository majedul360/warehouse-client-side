import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <div className="header">
      <img src="images/logo.png" alt="" />
      <nav className={`nav ${menuIsOpen && "active"}`}>
        <Link className="nav-link" to="/" onClick={() => setMenuIsOpen(false)}>
          Home
        </Link>
        <Link
          className="nav-link"
          to="/manage-iteams"
          onClick={() => setMenuIsOpen(false)}
        >
          Manage Iteams
        </Link>
        <Link
          className="nav-link"
          to="/add-iteams"
          onClick={() => setMenuIsOpen(false)}
        >
          Add Iteams
        </Link>
        <Link
          className="nav-link"
          to="/my-iteams"
          onClick={() => setMenuIsOpen(false)}
        >
          My Iteams
        </Link>
        <Link
          className="nav-link"
          to="/registar"
          onClick={() => setMenuIsOpen(false)}
        >
          Registar
        </Link>
        <Link
          className="nav-link"
          to="/login"
          onClick={() => setMenuIsOpen(false)}
        >
          Login
        </Link>
      </nav>
      <FontAwesomeIcon
        onClick={() => setMenuIsOpen(!menuIsOpen)}
        className="icon"
        icon={faBars}
      ></FontAwesomeIcon>
    </div>
  );
};

export default Header;
