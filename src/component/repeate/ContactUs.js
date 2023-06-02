import React from 'react'
import './contact.css'
import Heading from './Heading'
export default function ContactUs() {
    return (
        <>
            <Heading />
            <div style={{ height: "10vh" }}>

            </div>
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
