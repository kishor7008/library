import React, { useDebugValue, useState } from 'react'
import './paymentCard.css'
import EmployeeHeading from './EmployeeHeader'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../App'
export default function PaymentCard() {


let bookDetails=JSON.parse(localStorage.getItem("bookDetails"))
let customerDetails=JSON.parse(localStorage.getItem("customer"))
let [studentId,setStudentId]=useState()
// console.log(bookDetails,customerDetails)
// console.log(bookDetails.category)

const navigate=useNavigate()

console.log(studentId)
const payment=()=>{
try {
    
let userDetail;
    console.log("userget")
fetch(`${API_URL}/get/user`,{
    
    method:"POST",
    headers:{
        "Content-type":"application/json",
       Accept:"application/json",
    },
    body:JSON.stringify({
        email:customerDetails.email
    })
}).then(res=>res.json())
.then(data=>{
    console.log(data)
    if(data.status==true){
        fetch(`${API_URL}/order/ByAdmin`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
               Accept:"application/json",
            },
            body:JSON.stringify({
                
                    "bookId":bookDetails.bookId,
                    "userId":data.message._id,
                "quantity":customerDetails.quantity,
                "total":customerDetails.quantity*bookDetails.price,
                "day":customerDetails.day
                
                
            })
           }).then(res=>res.json())
           .then(data=>{
            console.log(data)
            if(data.status==true){
                localStorage.clear()
                localStorage.setItem("invoice",JSON.stringify(data.message))
                alert("Order Create Successfully")
                navigate("/order_invoice")
        
            }else{
                console.log(data)
                alert(data.message)
            }
           })

        
    }else {
    console.log("userget2")
    }
})
console.log("userget3")
// console.log(userDetail,"ewhcacn333")

  
} catch (error) {
    console.log(error)
}

    // navigate("/order_invoice")
}
  return (

    <>
    <EmployeeHeading/>
    <div style={{height:"20vh"}}></div>
    <div class="container d-lg-flex">
        <div class="box-1 bg-light user">
            <div class="d-flex align-items-center mb-3">
                <img src={bookDetails.image}
                    class="pic rounded-circle" alt=""/>
                <p class="ps-2 name">Oliur</p>
            </div>
            <div class="box-inner-1 pb-3 mb-3 ">
                <div class="d-flex justify-content-between mb-3 userdetails">
                    <p class="fw-bold">{bookDetails.name}</p>
                    <p class="fw-lighter"><span class="fas fa-dollar-sign"></span>{bookDetails.price}</p>
                </div>
                <div id="my" class="carousel slide carousel-fade img-details" data-bs-ride="carousel"
                    data-bs-interval="2000">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#my" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#my" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#my" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src={bookDetails.image}
                                class="d-block w-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src=
                            {bookDetails.image}
                                class="d-block w-100 h-100"/>
                        </div>
                        <div class="carousel-item">
                            <img src=
                           {bookDetails.image}
                                class="d-block w-100"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#my" data-bs-slide="prev">
                        <div class="icon">
                            <span class="fas fa-arrow-left"></span>
                        </div>
                        <span class="visually-hidden">Previous</span>
                    </button>

                    <button class="carousel-control-next" type="button" data-bs-target="#my" data-bs-slide="next">
                        <div class="icon">
                            <span class="fas fa-arrow-right"></span>
                        </div>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
                <p class="dis info my-3">{bookDetails.description}
                </p>
                <div class="radiobtn">
                    <input type="radio" name="box" id="one"/>
                    <input type="radio" name="box" id="two"/>
                    <input type="radio" name="box" id="three"/>
                    <label for="one" class="box py-2 first">
                        <div class="d-flex align-items-start">
                            <span class="circle"></span>
                            <div class="course">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <span class="fw-bold">
                                      {bookDetails.name}
                                    </span>
                                    <span class="fas fa-dollar-sign">{bookDetails.price}</span>
                                </div>
                                <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label>
                    
                    {/* <label for="three" class="box py-2 third">
                        <div class="d-flex">
                            <span class="circle"></span>
                            <div class="course">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <span class="fw-bold">
                                        Collection 01
                                    </span>
                                    <span class="fas fa-dollar-sign">29</span>
                                </div>
                                <span>10 x Presets. Released in 2018</span>
                            </div>
                        </div>
                    </label> */}
                </div>
            </div>
        </div>
        <div class="box-2">
            <div class="box-inner-2">
                <div>
                    <p class="fw-bold">Payment Details</p>
                    <p class="dis mb-3">Complete your purchase by providing your payment details</p>
                </div>
                <form action="">
                    <div class="mb-3">
                        <p class="dis fw-bold mb-2">Email address</p>
                        <input class="form-control" type="email" value="luke@skywalker.com"/>
                    </div>
                    <div>
                        <p class="dis fw-bold mb-2">Card details</p>
                        <div class=" card-atm border rounded">
                            <div class="fab fa-cc-visa ps-3"></div>
                            <input type="text" class="form-control" placeholder="Card Details"/>
                          
                            <div class="fab fa-cc-visa ps-3"></div>
                            <input type="text" class="form-control px-0" placeholder="MM/YY" autoComplete='off'/>
                            <br/>
                            <div class="fab fa-cc-visa ps-3"></div>
                            <input type="password"  class="form-control px-0" placeholder="CVV"  autoComplete='off'/>

                            <br/>
                            {/* <div class="d-flex w-50">
                                <input type="text" class="form-control px-0" placeholder="MM/YY"/>
                                
                                <input type="password"  class="form-control px-0" placeholder="CVV"/>
                            </div> */}
                        </div>
                        <div class="my-3 cardname">
                            <p class="dis fw-bold mb-2">Cardholder name</p>
                            <input class="form-control" type="text"/>
                        </div>
                        <div class="address">
                            <p class="dis fw-bold mb-3">Billing address</p>
                            
                           <div>{customerDetails.adress}</div>
                            <div class="d-flex flex-column dis">
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p>Price</p>
                                    <p><span class="fas fa-dollar-sign"></span>{bookDetails.price} </p>
                                    
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p>Quantity</p>
                                    <p><span class="fas fa-dollar-sign"></span>{customerDetails.quantity}</p>
                                    
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                <p>Subtotal</p>
                                <p><span class="fas fa-dollar-sign"></span>{bookDetails.price * customerDetails.quantity}</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p>VAT<span>(20%)</span></p>
                                    <p><span class="fas fa-dollar-sign"></span>2.80</p>
                                </div>
                                <div class="d-flex align-items-center justify-content-between mb-2">
                                    <p class="fw-bold">Total</p>
                                    <p class="fw-bold"><span class="fas fa-dollar-sign"></span>{bookDetails.price * customerDetails.quantity+2.35}</p>
                                </div>
                                <div class="btn btn-primary mt-2" onClick={payment}>Pay<span class="fas fa-dollar-sign px-1" >{bookDetails.price * customerDetails.quantity+2.35}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    </>
  )
}
