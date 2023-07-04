import EmployeeProfile from "./EmployeeProfile";
import React, { useState } from "react";
import "../repeate/heading1.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "75%",
    height: "80%",
    bgcolor: "white",
    border: ".5px solid pink",
    boxShadow: 24,
    borderRadius: "20px",
    p: 4,
  };
const Heading = () => {
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
      <li class="active"> <Link to='/employee_home'>Home</Link> </li>
      <li><Link to="/create_order">Create Order</Link></li>
      <li><Link to='/employee_order'>Oder Status</Link></li>
      <li><Link to='/employee_addbook'>Add Books</Link></li>
      <li><Link to='/employee_report'>Report</Link></li>
      <li><Link to=''><EmployeeProfile/></Link></li>
                      </ul>
    </nav>
    
   </>
  );
};

export default Heading;
