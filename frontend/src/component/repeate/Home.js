import React from "react";
import Author from "./Author";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import Heading from "./Heading";
import AboutUs from "./AboutUs";
import Slider from "../students/Slider";
// import Heading1 from "./Heading1";

export default function Home() {
  return (
    <>
      <Heading/>
      <div style={{width:"100%",height:"80vh",display:"flex",background:"white",marginTop:"50px"}} class="homePageimage">
        <div style={{width:"50%",height:"100%"}}>
           <img src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg?w=2000" style={{width:"100%",height:"100%"}}/>
        </div>
        <div style={{width:"50%",height:"100%"}}>
             <div style={{position: 'relative',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)'}}>
{/* <h2 >
Welcome to
                </h2>
                <h2>Our Library!</h2> */}
                
              <div class="aboutheading">
                <h2 style={{lineHeight:1.5}} className="headingT">
                  Welcome<br/>  to <br/> <strong class="black">Our Library!</strong>
                </h2>
                
            
            </div>
             </div>
</div> 
        </div>

        

      <div class="about">
        <div class="container">
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="aboutheading">
                <h2>
                  About <strong class="black">Us</strong>
                </h2>
                <span>
                Welcome to the Library Shop, your one-stop destination for all things book-related! We are passionate about promoting literacy, knowledge, and the joy of reading. 
                </span>
              </div>
            </div>
          </div>
          <div class="row border">
            <div class="col-xl-7 col-lg-7 col-md-12 col-sm-12">
              <div class="about-box">
                <p>
                  {" "}
                  Our mission is to create a welcoming and inspiring environment where book lovers can explore, discover, and indulge in their love for literature. Whether you're seeking the latest bestsellers, classic novels, children's books, or niche genres, we strive to curate a diverse collection that caters to every reader's tastes.

But we're more than just a bookstore. We believe that libraries are not only repositories of knowledge but also community hubs. That's why we go beyond selling books and actively engage with our local community through various events, workshops, and author signings. We collaborate with schools, book clubs, and other organizations to promote reading culture and foster a love for learning.
                </p>
                <a href="#">Read More</a>
              </div>
            </div>
            <div class="col-xl-5 col-lg-5 col-md-12 col-sm-12">
              <div class="about-box">
                <figure>
                  <img src="images/about.png" alt="img" />
                </figure>
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
                <h2>
                  Our <strong class="black">Library </strong>
                </h2>
                <span>
                Our dedicated librarians are passionate about helping you find the perfect book. They are always ready to offer personalized recommendations, assist with research projects, or guide you through our vast catalog of digital resources. We believe in the transformative power of literature, and our staff is committed to creating an inclusive and welcoming environment for all visitors.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div class="bg">
          <div class="container">
            <div class="row">
              <div class="col-md-10 offset-md-1">
                <div class="Library-box">
                  <figure>
                    <img src="images/Library-.jpg" alt="#" />
                  </figure>
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
                <h2>
                  {" "}
                  Aut<strong class="black">hors </strong>
                </h2>
                <span>
                Certainly! Here are a few quotes from notable authors about libraries
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Author />
      <ContactUs/>
    </>
  );
}
