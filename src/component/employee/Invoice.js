import React, { useEffect, useState } from 'react'
import EmployeeHeading from './EmployeeHeader'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../App'
export default function Invoice() {
const navigate=useNavigate()
const[details,setDetails]=useState()
const orderDetails=JSON.parse(localStorage.getItem("invoice"))
console.log(orderDetails.orderId)
    const createOrder=()=>{
alert("Order Create Successfully")
navigate("/create_order")
    }
    useEffect(()=>{
        fetch(`${API_URL}/order/details/${orderDetails.orderId}`,{
            method:"GET",
            headers:{
                "Content-type":"application/json",
                Accept:"application/json"
            }
        }).then(res=>res.json())
        .then(data=>{
            console.log(data.message)
            setDetails(data.message)

        })
    },[])
    console.log(details)
    return (
        <>
        <EmployeeHeading/>
<div style={{height:"5vh"}}></div>

            <div class="card">
                <div class="card-body">
                    <div class="container mb-5 mt-3">
                        <div class="row d-flex align-items-baseline">
                            <div class="col-xl-9">
                                <p style={{ color: "#7e8d9f", fontSize: "20px" }}>Invoice  <strong>{details && details.orderId}</strong></p>
                            </div>
                            <div class="col-xl-3 float-end">
                                <a class="btn btn-light text-capitalize border-0" data-mdb-ripple-color="dark"><i
                                    class="fas fa-print text-primary"></i> Print</a>
                                <a class="btn btn-light text-capitalize" data-mdb-ripple-color="dark"><i
                                    class="far fa-file-pdf text-danger"></i> Export</a>
                            </div>
                            <hr />
                        </div>

                        <div class="container">
                            <div class="col-md-12">
                                <div class="text-center">
                                    {/* <i class="fab fa-mdb fa-4x ms-0" style={{ color: "#5d9fc5" }}></i> */}
                                    <p class="pt-0" style={{fontSize:"30px"}}>Memorial Library</p>
                                </div>

                            </div>


                            <div class="row">
                                <div class="col-xl-8">
                                    <ul class="list-unstyled">
                                        <li class="text-muted">To: <span style={{ color: "#5d9fc5" }}>{details && details.student.name}</span></li>
                                        {/* <li class="text-muted">Street, City</li>
                                        <li class="text-muted">State, Country</li> */}
                                        <li class="text-muted"><i class="fas fa-phone">{details && details.student.phone}</i> </li>
                                    </ul>
                                </div>
                                <div class="col-xl-4">
                                    <p class="text-muted">Invoice</p>
                                    <ul class="list-unstyled">
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
                                            class="fw-bold">ID:</span>{details && details.orderId}</li>
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
                                            class="fw-bold">Creation Date: </span>{details && details.createdAt}</li>
                                        <li class="text-muted"><i class="fas fa-circle" style={{ color: "#84B0CA" }}></i> <span
                                            class="me-1 fw-bold">Status:</span><span class="badge bg-warning text-black fw-bold">
                                                paid</span></li>
                                    </ul>
                                </div>
                            </div>

                            <div class="row my-2 mx-1 justify-content-center">
                                <table class="table table-striped table-borderless">
                                    <thead style={{ backgroundColor: "#84B0CA" }} class="text-white">
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Description</th>
                                            <th scope="col">Qty</th>
                                            <th scope="col">Unit Price</th>
                                            <th scope="col">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>{details && details.bookDetails.name}</td>
                                            <td>{details && details.bookDetails.quantity}</td>
                                            <td>{details && details.bookDetails.price}</td>
                                            <td>{details && details.bookDetails.price*details.bookDetails.quantity}</td>
                                        </tr>
                                      
                                    </tbody>

                                </table>
                            </div>
                            <div class="row">
                                <div class="col-xl-8">
                                    <p class="ms-3">Add additional notes and payment information</p>

                                </div>
                                <div class="col-xl-3">
                                    <ul class="list-unstyled">
                                        <li class="text-muted ms-3"><span class="text-black me-4">SubTotal</span>${details && details.bookDetails.price*details.bookDetails.quantity}</li>
                                        <li class="text-muted ms-3 mt-2"><span class="text-black me-4">Tax(15%)</span>${details && (details.bookDetails.price*details.bookDetails.quantity)+((15*(details.bookDetails.price*details.bookDetails.quantity))/100)}</li>
                                    </ul>
                                    <p class="text-black float-start"><span class="text-black me-3"> Total Amount</span><span
                                        style={{ fontSize: "25px" }}>$1221</span></p>
                                </div>
                            </div>
                            <hr />
                            <div class="row">
                                <div class="col-xl-10">
                                    <p>Thank you for your purchase</p>
                                </div>
                                <div class="col-xl-2">
                                    <button type="button" class="btn btn-primary text-capitalize"
                                        style={{ backgroundColor: "#60bdf3" }} onClick={createOrder}>Next</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
