import React from 'react'
import './orderDetails.css'
import { dateTime } from './OrderStatus'
export default function OrderDetailsCard(props) {
    return (
        <>
            {/* <div class="container-fluid my-5 d-sm-flex justify-content-center" style={{ width: "90%" }}> */}
            <div class="card px-2" style={{ width: "90%", height: "70%", margin: "auto" }}>
                <div style={{textAlign:"end",marginTop:"-30px",padding:"10px",fontWeight:"bold",fontSize:"30px"}} onClick={()=>{
                    props.func(false)
                }}>X</div>
                <div class="card-header bg-white">
                    <div class="row justify-content-between">
                        <div class="col d-flex justify-content-between" >
                            <p class="text-muted"> Order ID  <span class="font-weight-bold text-dark">{props.data.orderId}</span></p>
                            <p class="text-muted"> Place On <span class="font-weight-bold text-dark">{dateTime(props.data.createdAt)}</span> </p>
                            <p class="text-muted"> Status <span class="font-weight-bold text-dark">{props.data.status}</span> </p>
                            </div>
                        <div class="flex-col my-auto">
                            <h6 class="ml-auto mr-3">
                                {/* <a href="#">View Details</a> */}
                            </h6>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                <h5 class="bold">Customer Details</h5>
                <p class="bold">Name : {props.data.student.name}</p>
                <p class="bold">Email : {props.data.student.email}</p>
                <p class="bold">Phone : {props.data.student.phone}</p>
                </div>
                <div class="card-body">
                    <div class="media flex-column flex-sm-row">
                        <div class="media-body ">
                            <h5 class="bold">{props.data.bookDetails.name}</h5>
                            <p>{props.data.bookDetails.description}</p>
                            <p class="text-muted"> Qt: {props.data.bookDetails.quantity} </p>
                            <h4 class="mt-3 mb-4 bold"> <span class="mt-5">&#x20B9;</span> {props.data.bookDetails.price} <span class="small text-muted"> via (COD) </span></h4>
                            <p class="text-muted"> Return Date : {props.data.day} </p>

                            <p class="text-muted">Tracking Status on: <span class="Today">{dateTime(props.data.updatedAt)}</span></p>
                            <div >Reached Hub, Delhi</div>
                        </div><img class="align-self-center img-fluid" src={props.data.bookDetails.image} width="180 " height="180" />
                    </div>
                </div>
                
                <div class="card-footer  bg-white px-sm-3 pt-sm-4 px-0">
                    <div class="row text-center  ">
                        {/* <div class="col my-auto  border-line "><h5 >Track</h5></div> */}
                        <div class="col  my-auto  border-line "><h5>Cancel</h5></div>
                        {/* <div class="col my-auto   border-line "><h5>Pre-pay</h5></div> */}
                        <div class="col  my-auto mx-0 px-0 "><img class="img-fluid cursor-pointer" src="https://img.icons8.com/ios/50/000000/menu-2.png" width="30" height="30" /></div>
                    </div>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
