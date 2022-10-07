import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase/Firebase.int";
import { signOut } from "firebase/auth";
const Header = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="header">
      <img src="images/logo.png" alt="" />
      <nav className={`nav ${menuIsOpen && "active"}`}>
        <Link className="nav-link" to="/" onClick={() => setMenuIsOpen(false)}>
          Home
        </Link>
        {user && (
          <Link
            className="nav-link"
            to="/manage-iteams"
            onClick={() => setMenuIsOpen(false)}
          >
            Manage Iteams
          </Link>
        )}
        {user && (
          <Link
            className="nav-link"
            to="/addIteams"
            onClick={() => setMenuIsOpen(false)}
          >
            Add Iteams
          </Link>
        )}
        {user && (
          <Link
            className="nav-link"
            to="/my-iteams"
            onClick={() => setMenuIsOpen(false)}
          >
            My Iteams
          </Link>
        )}

        <Link
          className="nav-link"
          to="/registar"
          onClick={() => setMenuIsOpen(false)}
        >
          Registar
        </Link>
        {user ? (
          <span
            onClick={() => signOut(auth, setMenuIsOpen(false))}
            style={{ cursor: "pointer" }}
            className="nav-link"
          >
            Log Out
          </span>
        ) : (
          <Link
            className="nav-link"
            to="/login"
            onClick={() => setMenuIsOpen(false)}
          >
            Login
          </Link>
        )}
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
