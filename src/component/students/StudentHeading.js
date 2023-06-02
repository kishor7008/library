import React from 'react'
import { Link } from 'react-router-dom'
export default function StudentHeading() {
    return (
        <>
            <header>
                <div class="header">
                    <div class="container">
                        <div class="row">
                            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                                <div class="full">
                                    <div class="center-desk">
                                        <div class="logo"> <a href="index.html"><img src="images/logo.png" alt="#" /></a> </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                                <div class="menu-area">
                                    <div class="limit-box">
                                        <nav class="main-menu">
                                            <ul class="menu-area-main">


                                                <li class="active"> <Link to='/'>Home</Link> </li>
                                                <li><Link to="/library">Cart</Link></li>
                                                <li><Link to='/contactus'>My Booking</Link></li>
                                                <li><Link to='/'>Profile</Link></li>

                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </header>
        </>
    )
}