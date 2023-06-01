import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './component/repeate/Home'
import Author from './component/repeate/Author'
import ContactUs from './component/repeate/ContactUs'
import Footer from './component/repeate/Footer'
import OurBook from './component/repeate/OurBook'
import OurBook2 from './component/repeate/OurBook2'
import OurBook3 from './component/repeate/OurBook3'
import OurBook4 from './component/repeate/OurBook4'
import Heading from './component/repeate/Heading'
import Libray from './component/repeate/Libray'
import AboutUs from './component/repeate/AboutUs'
import Book from './component/repeate/Book'
import { Login } from './component/repeate/Login'
// import Login from './component/repeate/Login'
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/library" element={<Libray />} />
          <Route path="/books" element={<Book />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />

          {/* student */}

        </Routes>
      </BrowserRouter>

    </>
  )
}
