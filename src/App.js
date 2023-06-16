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
import StudentHomePage from './component/students/StudentHomePage'
import Approve from './component/employee/Approve'
import OrderStatus from './component/employee/OrderStatus'
import Report from './component/employee/Report'
import EmployeeHome from './component/employee/EmployeeHome'
import Profile from './component/students/Profile'

import SearchOrderId from './component/employee/SearchOrderId'
import Card from './Card'
import OrderDetailsCard from './component/employee/OrderDetailsCard'
import CreateOrder from './component/employee/CreateOrder'
import Setting from './component/employee/Setting'
import Help from './component/employee/Help'
import RequestList from './component/employee/RequestList'
import EmployeeProfileDetails from './component/employee/EmployeeProfileDetails'
import CustomerDetails from './component/employee/CustomerDetails'
import PaymentCard from './component/employee/PaymentCard'
import Invoice from './component/employee/Invoice'
export const API_URL = "http://localhost:4000"
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
          <Route path="/student_home" element={<StudentHomePage />} />
          <Route path="/student_cart" element={<StudentCart />} />
          <Route path="/student_order" element={<OrderDetails />} />
          <Route path="/student_wallet" element={<Wallet />} />
          <Route path="/slider" element={<Slider />} />

          {/* employee */}
          <Route path="/employee_heading" element={<EmployeeHeading />} />
          <Route path="/employee_home" element={<EmployeeHome />} />

          <Route path="/employee_addbook" element={<AddBook />} />
          <Route path="/employee_approve" element={<Approve />} />
          <Route path="/employee_order" element={<OrderStatus />} />
          <Route path="/employee_report" element={<Report />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/modify" element={<SearchOrderId />} />
          <Route path="/card" element={<Card />} />
          <Route path="/create_order" element={<CreateOrder />} />
          <Route path="/employee_setting" element={<Setting />} />
          <Route path="/employee_help" element={<Help />} />
          <Route path="/employee_request_book" element={<RequestList />} />
          <Route path="/employee_profile" element={<EmployeeProfileDetails />} />
          <Route path="/customer_details" element={<CustomerDetails />} />
          <Route path="/payment_details" element={<PaymentCard/>} />
          <Route path="/order_invoice" element={<Invoice/>} />





        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
