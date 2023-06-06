import React from 'react'
import '../students/Profile.css'
export default function EmployeeProfile() {
    return (
        <>
            <div class="dropdown">
                <div style={{ textDecoration: "none", background: "trasparent" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0PXgAh7ba4WdsiCzZWGTZOZK6OhDOi67mA&usqp=CAU" style={{ width: "50px", height: "50px", borderRadius: "50%" }} /></div>
                <div class="dropdown-content">
                    <a href="#" style={{ color: "white", textAlign: "left" }}>Profile</a>
                    <a href="#" style={{ color: "white", textAlign: "left" }}>Book Request</a>
                    <a href="#" style={{ color: "white", textAlign: "left" }}>Setting</a>
                    <a href="#" style={{ color: "white", textAlign: "left" }}>Help</a>
                    <a href="#" style={{ color: "white", textAlign: "left" }}>Logout</a>
                </div>
            </div></>
    )
}

