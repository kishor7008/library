import React, { useEffect, useState } from 'react'
import './setting.css'
import { API_URL } from '../../App'
import { useNavigate } from 'react-router-dom'
import EmployeeHeading from './EmployeeHeader'
export default function Setting() {
    const[profile,setProfile]=useState()
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[phone,setPhone]=useState()
const navigate=useNavigate()
    let token=localStorage.getItem("token")
    const getProfile=()=>{
    fetch(`${API_URL}/get/admin/profile`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Authorization":`Bearer ${token}`
        }
    }).then(res=>res.json())
    .then(data=>{
        setName(data.name)
        setEmail(data.email)
        setPhone(data.phone)
      
    }).catch(err=>alert(err.message))

}
const profileUpdate=()=>{
    fetch(`${API_URL}/update/admin/profile`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
name,email,phone
        })
    }).then(res=>res.json())
    .then(data=>{
       if(data.status==true){
alert(data.message)
       }else{
        alert(data.message)
       }
    }).catch(err=>alert(err.message))
}

const deleteAccount=()=>{
    fetch(`${API_URL}/delete/admin/profile`,{
        method:"DELETE",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Authorization":`Bearer ${token}`
        },
        
            }).then(res=>res.json())
    .then(data=>{
       if(data.status==true){
alert(data.message)
navigate("/")
       }else{
alert(data.message)
       }
    }).catch(err=>alert(err.message))
}
useEffect(()=>{
    getProfile()
},[])
    return (
        <>
            <EmployeeHeading />
            <div style={{ height: "20vh" }}></div>
            <div class=" bg-white " style={{ width: "80%", margin: "auto" }}>
                <h4 class="pb-4 border-bottom" style={{ fontSize: "20px", fontWeight: "bod" }}>Account settings</h4>
                <div class="d-flex align-items-start py-3 border-bottom">
                    <img src="https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                        class="img" alt="" />
                    <div class="pl-sm-4 pl-2" id="img-section">
                        <b>Profile Photo</b>
                        <p>Accepted file type .png. Less than 1MB</p>
                        <button class="btn button border"><b>Upload</b></button>
                    </div>
                </div>
                <div class="py-2">
                    <div class="row py-2">
                        <div class="col-md-6">
                            <label for="firstname">First Name</label>
                            <input type="text" class="bg-light form-control" placeholder="Steve" value={name} onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div class="col-md-6">
                            <label for="email">Email Address</label>
                            <input type="text" class="bg-light form-control" placeholder="steve_@email.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>
                    <div class="row py-2">
                        
                        <div class="col-md-6 pt-md-0 pt-3">
                            <label for="phone">Phone Number</label>
                            <input type="tel" class="bg-light form-control" placeholder="+1 213-548-6015" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                        <div class="col-md-6">
                            <label for="country">Country</label>
                            <select name="country" id="country" class="bg-light">
                                <option value="india" selected>India</option>
                                <option value="usa">USA</option>
                                <option value="uk">UK</option>
                                <option value="uae">UAE</option>
                            </select>
                        </div>
                    </div>
                    
                    <div class="py-3 pb-4 border-bottom">
                        <button class="btn btn-primary mr-3" onClick={()=>profileUpdate()}>Save</button>
                        <button class="btn border button">Cancel</button>
                    </div>
                    <div class="d-sm-flex align-items-center pt-3" id="deactivate">
                        <div>
                            <b>Deactivate your account</b>
                            <p>Details about your company account and password</p>
                        </div>
                        <div class="ml-auto">
                            <button class="btn danger" onClick={()=>deleteAccount()}>Deactivate</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
