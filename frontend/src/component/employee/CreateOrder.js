import React from 'react'
import EmployeeHeading from './EmployeeHeader'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
   
    MDBInput,
    MDBCheckbox
}
    from 'mdb-react-ui-kit';
import './createOrder.css'
import BuyBookCard from './BuyBookCard';
import CustomerDetails from './CustomerDetails';
import Invoice from './Invoice';
import PaymentCard from './PaymentCard';
export default function CreateOrder() {
    return (
        <>
            <EmployeeHeading />
              <div style={{ height: "15vh" }}></div>
            {/* <CustomerDetails/>
             <Invoice/> 
            <PaymentCard/>
        <div style={{ height: "20vh" }}></div>  */}
           <BuyBookCard/> 
           
        </>
    )
}
