import React from 'react'
import Author from './Author'
import ContactUs from './ContactUs'
import Footer from './Footer'
import Heading from './Heading'
import AboutUs from './AboutUs'

export default function Home() {
    return (
        <>
            {/* <div class="loader_bg">
                <div class="loader"><img src="images/loading.gif" alt="#" /></div>
            </div> */}

            <Heading />
            <section class="slider_section">
                <div id="myCarousel" class="carousel slide banner-main" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="first-slide" src="images/banner.jpg" alt="First slide" />
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>The Best Libraries That<br /> Every Book Lover Must<br /> Visit!</h1>
                                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation </p>
                                    <div class="button_section"> <a class="main_bt" href="#">Read More</a>  </div>
                                    <ul class="locat_icon">
                                        <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                                        <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                                        <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                                        <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="second-slide" src="images/banner.jpg" alt="Second slide" />
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>The Best Libraries That<br /> Every Book Lover Must<br /> Visit!</h1>
                                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation </p>
                                    <div class="button_section"> <a class="main_bt" href="#">Read More</a>  </div>
                                    <ul class="locat_icon">
                                        <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                                        <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                                        <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                                        <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img class="third-slide" src="images/banner.jpg" alt="Third slide" />
                            <div class="container">
                                <div class="carousel-caption relative">
                                    <h1>The Best Libraries That<br /> Every Book Lover Must<br /> Visit!</h1>
                                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br /> labore et dolore magna aliqua. Ut enim ad minim<br /> veniam, quis nostrud exercitation </p>
                                    <div class="button_section"> <a class="main_bt" href="#">Read More</a>  </div>
                                    <ul class="locat_icon">
                                        <li> <a href="#"><img src="icon/facebook.png" /></a></li>
                                        <li> <a href="#"><img src="icon/Twitter.png" /></a></li>
                                        <li> <a href="#"><img src="icon/linkedin.png" /></a></li>
                                        <li> <a href="#"><img src="icon/instagram.png" /></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </section>

            <div class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="aboutheading">
                                <h2>About <strong class="black">Us</strong></h2>
                                <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                            </div>
                        </div>
                    </div>
                    <div class="row border">
                        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div class="about-box">
                                <p> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
                                <a href="#">Read More</a>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                            <div class="about-box">
                                <figure><img src="images/about.png" alt="img" /></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="Library">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="titlepage">
                                <h2>Our <strong class="black">Library </strong></h2>
                                <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div class="Library-box">
                                    <figure><img src="images/Library-.jpg" alt="#" /></figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container" style={{ marginBottom: "0" }}>
                    <div class="row">
                        <div class="col-md-12">
                            <div class="read-more">
                                <a href="#">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Library" style={{ marginTop: "0" }}>
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="titlepage">
                                <h2> Aut<strong class="black">hors </strong></h2>
                                <span>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Author />
            <div class="contact-page main">
                <h2>Get in touch</h2>
                <div class="contact-info">
                    <div class="item">
                        <i class="icon fas fa-home"></i>
                        New York, United States
                    </div>
                    <div class="item">
                        <i class="icon fas fa-phone"></i>
                        +0 000 0000000
                    </div>
                    <div class="item">
                        <i class="icon fas fa-envelope"></i>
                        email@address.com
                    </div>
                    <div class="item">
                        <i class="icon fas fa-clock"></i>
                        Mon - Fri 8:00 AM to 6:00 PM
                    </div>
                </div>
                <form action="" class="contact-form">
                    <input type="text" class="textb" placeholder="Your Name" />
                    <input type="email" class="textb" placeholder="Your Email" />
                    <textarea placeholder="Your Message"></textarea>
                    <input type="submit" class="btn" value='Send' />
                </form>
            </div>
          
        </>
    )
}
