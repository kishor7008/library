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
import StudentHeading from './component/students/StudentHeading'
import StudentHome from './component/students/StudentHome'
// import Login from './component/repeate/Login'
import StudentCart from './component/students/StudentCart'
import OrderDetails from './component/students/OrderDetails'
import Slider from './component/students/Slider'
import EmployeeHeading from './component/employee/EmployeeHeader'
import Wallet from './component/students/Wallet'
import AddBook from './component/employee/AddBook'
import SliderFlower from './SliderFlower'
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
          <Route path="/student_home" element={<StudentHome />} />
          <Route path="/student_cart" element={<StudentCart />} />
          <Route path="/student_order" element={<OrderDetails />} />
          <Route path="/student_wallet" element={<Wallet />} />
          <Route path="/slider" element={<Slider />} />

          {/* employee */}
          <Route path="/employee_heading" element={<EmployeeHeading />} />
          <Route path="/employee_addbook" element={<AddBook />} />
          <Route path="/silderflower" element={<SliderFlower />} />

        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
