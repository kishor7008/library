import React from 'react'
import '../students/Profile.css'
import { Link } from 'react-router-dom'
export default function EmployeeProfile() {
    return (
        <>
            <div class="dropdown">
                <div style={{ textDecoration: "none", background: "trasparent" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0PXgAh7ba4WdsiCzZWGTZOZK6OhDOi67mA&usqp=CAU" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></div>
                <div class="dropdown-content">
                    <Link to="/employee_profile" style={{ color: "white", textAlign: "left" }}>Profile</Link>
                    <Link to="/employee_request_book" style={{ color: "white", textAlign: "left" }}>Book Request</Link>
                    <Link to="/employee_setting" style={{ color: "white", textAlign: "left" }}>Setting</Link>
                    <Link to="/employee_help" style={{ color: "white", textAlign: "left" }}>Help</Link>
                    <Link to="/" style={{ color: "white", textAlign: "left" }}>Logout</Link>
                </div>
            </div></>
    )
}

