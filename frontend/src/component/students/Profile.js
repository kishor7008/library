import React from 'react'
import './Profile.css'
import { Link } from 'react-router-dom'
export default function Profile() {
    return (
        <>
            <div class="dropdown">
                <div style={{ textDecoration: "none", background: "trasparent" }}><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI0PXgAh7ba4WdsiCzZWGTZOZK6OhDOi67mA&usqp=CAU" style={{ width: "30px", height: "30px", borderRadius: "50%" }} /></div>
                <div class="dropdown-content" style={{minWidth:"200px",right:"1px"}}>
                    <Link to="/student_profile" >Profile</Link>
                    <Link to="/student_addbook" >Add Books</Link>
                    <Link to="/student_setting" >Setting</Link>
                    <Link to="/student_help" >Help</Link>
                    <Link to="/student_logout" >Logout</Link>
                </div>
            </div></>
    )
}
