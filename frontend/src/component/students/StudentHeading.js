

import React, { useState } from "react";
import "../repeate/heading1.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Profile from "./Profile";
const StudentHeading = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <img
            src="images/logo.png"
            alt="Logo Image"
            style={{ width: "270px" }}
          />
        </div>
        <div
          className={`hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleNavbar}
        >
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
        <div style={{ width: "300px" }}></div>
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <Link to="/student_home">Home</Link>{" "}
          </li>
          <li>
            <Link to="/student_cart">Cart</Link>
          </li>
          <li>
            <Link to="/student_order">My Orders</Link>
          </li>
          <li>
            <Link to="/student_wallet">Wallet</Link>
          </li>
          <li>
            <Link to="/student_profile">
              <Profile />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default StudentHeading;
