import React from 'react'
import Heading from './Heading'

export default function Libray() {
    return (
        <>
            <Heading />
            <div class="Library">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="titlepage">
                                <h2>Our <strong class="black">Library </strong></h2>
                                <span>Our dedicated librarians are passionate about helping you find the perfect book. They are always ready to offer personalized recommendations, assist with research projects, or guide you through our vast catalog of digital resources. We believe in the transformative power of literature, and our staff is committed to creating an inclusive and welcoming environment for all visitors.</span>
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
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="images/library/library.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="images/library/library1.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="images/library/library2.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="images/library/library3.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="images/library/library4.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="images/library/library5.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
        </>
    )
}
