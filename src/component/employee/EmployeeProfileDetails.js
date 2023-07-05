
import React, { useState } from 'react'
import EmployeeHeading from './EmployeeHeader'
import './EmployeeProfileDetails.css'
import { useEffect } from 'react'
import { API_URL } from '../../App'
export default function EmployeeProfileDetails() {
const[profile,setProfile]=useState()
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
        setProfile(data)
    }).catch(err=>alert(err.message))

}
    useEffect(()=>{
    getProfile()
     },[])


  return (
    
      <>
    <EmployeeHeading />

<section class="section about-section gray-bg" id="about">
                <div class="container">
                    <div class="row align-items-center flex-row-reverse">
                        <div class="col-lg-6">
                            <div class="about-text go-to">
                                <h3 class="dark-color">About Me</h3>
                                <h6 class="theme-color lead">A library is a place where a lot of books are kept for reading. Every school, college, and the university has its own library. There are all types of books including science, literature, famous personalities, economics, commerce, etc. Students love to visit the library and read books.
</h6>
                                <div class="row about-list">
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>Birthday</label>
                                            <p>4th april 1998</p>
                                        </div>
                                        <div class="media">
                                            <label>Age</label>
                                            <p>22 Yr</p>
                                        </div>
                                        <div class="media">
                                            <label>Residence</label>
                                            <p>Canada</p>
                                        </div>
                                        <div class="media">
                                            <label>Address</label>
                                            <p>California, USA</p>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="media">
                                            <label>E-mail</label>
                                            <p>{profile && profile.email}</p>
                                        </div>
                                        <div class="media">
                                            <label>Phone</label>
                                            <p>{profile && profile.phone}</p>
                                        </div>
                                        <div class="media">
                                            <label>Skype</label>
                                            <p>skype.0404</p>
                                        </div>
                                        <div class="media">
                                            <label>Freelance</label>
                                            <p>Available</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="about-avatar">
                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" title="" alt="" />
                            </div>
                        </div>
                    </div>
                  
                </div>
            </section> 
    </>
  )
}
