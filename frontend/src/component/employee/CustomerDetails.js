import React from 'react'
import './customerDetails.css'
import EmployeeHeading from './EmployeeHeader'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { LocalActivity } from '@mui/icons-material'
import { API_URL } from '../../App'
export default function CustomerDetails() {
    
const navigate=useNavigate()
//customer details
const [fName,setFname]=useState()
const [lName,setLname]=useState()
const [email,setEmail]=useState()
const [phone,setPhone]=useState()
const [adress,setAdress]=useState()
const [city,setCity]=useState()
const [region,setRegion]=useState()
const [zip,setZip]=useState()
const [country,setCountry]=useState()

// order details

const[day,setDay]=useState()
const[quantity,setQuantity]=useState()

    const details=()=>{

        if(!fName || !lName || !adress || !city || !region || !zip || !country || !day || !quantity || !email || !phone){
            alert("All Fields Required")
            return
        }
            fetch(`${API_URL}/get/user`,{
    
                method:"POST",
                headers:{
                    "Content-type":"application/json",
                   Accept:"application/json",
                },
                body:JSON.stringify({
                    email
                })
            }).then(res=>res.json())
            .then(data=>{
                if(data.status==true){
                    let customerDetails= {name:fName+lName,
                        adress,city,region,zip,country,email,phone,day,quantity}
                    
                        localStorage.setItem("customer",JSON.stringify(customerDetails))
                   let data=localStorage.getItem("customer")
                   
                alert("Already have an account")
                navigate("/payment_details")
            
                    
                }else {
            
                    fetch(`${API_URL}/student/register`,{
                        method:"POST",
                        headers:{
                            "Content-type":"application/json",
                            Accept:"application/json",
                        },body:JSON.stringify({
                            name:fName+" "+lName,
                            email,
                            phone,
                            password:"4455"
                        })
                    }).then(res=>res.json())
            .then(data=>{
                if(data.status==true){
                alert("New User")
                    let customerDetails= {name:fName+lName,
                        adress,city,region,zip,country,email,phone,day,quantity}
                    
                        localStorage.setItem("customer",JSON.stringify(customerDetails))
                   let data=localStorage.getItem("customer")
                   navigate("/payment_details")
                    
                }else{
                    alert(data.message)
                    return
                }
            }).catch(err=>alert(err.message))
                }
            })



           
        
    }
  return (
<>
<EmployeeHeading/>
<div style={{height:"20vh"}}></div>

   <section class="order-form m-4">
  <div class="container pt-4">
      <div class="row">
          <div class="col-12 px-4">
              <h1>Customer Details</h1>
              
              <hr class="mt-1" />
          </div>

          <div class="col-12">
              <div class="row mx-4">
                  <div class="col-12">
                      <label class="order-form-label">Name</label>
                  </div>
                  <div class="col-sm-6">
                      <div class="form-outline">
                          <input type="text" id="form1" class="form-control order-form-input" value={fName} onChange={(e)=>setFname(e.target.value)}/>
                          <label class="form-label" for="form1">First</label>
                      </div>
                  </div>
                  <div class="col-sm-6 mt-2 mt-sm-0">
                      <div class="form-outline">
                          <input type="text" id="form2" class="form-control order-form-input" value={lName} onChange={(e)=>setLname(e.target.value)}/>
                          <label class="form-label" for="form2">Last</label>
                      </div>
                  </div>
              </div>
              <div class="row mt-3 mx-4">
                  <div class="col-6">
                      <label class="order-form-label" for="date-picker-example">Email</label>
                      <br/>
                      <input
                          type="email" class="form-control order-form-input" id="datepicker1" data-mdb-toggle="datepicker" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                          
                  </div>
                  <div class="col-6">
                      <label class="order-form-label" for="date-picker-example">Phone Number</label>
                      <br/>
                      <input
                          type="text" class="form-control order-form-input" id="datepicker1" data-mdb-toggle="datepicker" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                          
                  </div>
                  
                 
              </div>
              <div class="col-12 px-4">
              <div class="row mt-3 mx-4">
                  <div class="col-12">
                      <label class="order-form-label">Adress</label>
                  </div>
                  <div class="col-12">
                      <div class="form-outline">
                          <input type="text" id="form5" class="form-control order-form-input" value={adress} onChange={(e)=>setAdress(e.target.value)}/>
                          <label class="form-label" for="form5">Street Address</label>
                      </div>
                  </div>
                  
                  <div class="col-sm-6 mt-2 pe-sm-2">
                      <div class="form-outline">
                          <input type="text" id="form7" class="form-control order-form-input" value={city} onChange={(e)=>setCity(e.target.value)}/>
                          <label class="form-label" for="form7">City</label>
                      </div>
                  </div>
                  <div class="col-sm-6 mt-2 ps-sm-0">
                      <div class="form-outline">
                          <input type="text" id="form8" class="form-control order-form-input" value={region} onChange={(e)=>setRegion(e.target.value)}/>
                          <label class="form-label" for="form8">Region</label>
                      </div>
                  </div>
                  <div class="col-sm-6 mt-2 pe-sm-2">
                      <div class="form-outline">
                          <input type="text" id="form9" class="form-control order-form-input" value={zip} onChange={(e)=>setZip(e.target.value)}/>
                          <label class="form-label" for="form9">Postal / Zip Code</label>
                      </div>
                  </div>
                  <div class="col-sm-6 mt-2 ps-sm-0">
                      <div class="form-outline">
                          <input type="text" id="form10" class="form-control order-form-input" value={country} onChange={(e)=>setCountry(e.target.value)}/>
                          <label class="form-label" for="form10">Country</label>
                      </div>
                  </div>
              </div>
              <h1 style={{marginTop:"10px"}}>Order Details</h1>
              
             
          </div>
              <div class="row mt-3 mx-4">
                  <div class="col-6">
                      <label class="order-form-label" for="date-picker-example">Return Date</label>
                      <br/>
                      <input
                          type="date" class="form-control order-form-input" id="datepicker1" data-mdb-toggle="datepicker" value={day} onChange={(e)=>setDay(e.target.value)}/>
                          
                  </div>
                  <div class="col-6">
                      <label class="order-form-label" for="date-picker-example">Quantity</label>
                      <br/>
                      <input
                          type="number" class="form-control order-form-input" id="datepicker1" data-mdb-toggle="datepicker" value={quantity} onChange={(e)=>setQuantity(e.target.value)}/>
                          
                  </div>
                  
                 
              </div>
              

             

              

              <div class="row mt-3">
                  <div class="col-12">
                      <button type="button" id="btnSubmit" class="btn btn-primary d-block mx-auto btn-submit" onClick={details}>Submit</button>
                  </div>
              </div>
          </div>
      </div>
  </div>
    </section>
</>  )
}