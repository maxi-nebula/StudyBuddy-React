import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <li className="li">
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/SyllabusPage">Syllabus</Link>
      </li>
      <li>
        <Link to="/RemindersPage">Reminders</Link>
      </li>
      <li>welcome:{props.username}</li>
    </div>
  );
};

export default Navbar;
