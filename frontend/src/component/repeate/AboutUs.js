import React from 'react'
import Heading from './Heading'

export default function AboutUs() {
    return (
        <>
            <Heading />
            <div class="about">
                <div class="container">
                    <div class="row">
                        <div class="col-md-10 offset-md-1">
                            <div class="aboutheading">
                                <h2>About <strong class="black">Us</strong></h2>
                                <span>Welcome to the Library Shop, your one-stop destination for all things book-related! We are passionate about promoting literacy, knowledge, and the joy of reading.</span>
                            </div>
                        </div>
                    </div>
                    <div class="row border">
                        <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
                            <div class="about-box">
                                <p> Our mission is to create a welcoming and inspiring environment where book lovers can explore, discover, and indulge in their love for literature. Whether you're seeking the latest bestsellers, classic novels, children's books, or niche genres, we strive to curate a diverse collection that caters to every reader's tastes.

But we're more than just a bookstore. We believe that libraries are not only repositories of knowledge but also community hubs. That's why we go beyond selling books and actively engage with our local community through various events, workshops, and author signings. We collaborate with schools, book clubs, and other organizations to promote reading culture and foster a love for learning.</p>
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
        </>
    )
}
