import React, { useState } from 'react'
import './contact.css'
import Heading from './Heading'
import { API_URL } from '../../App'
export default function ContactUs() {
    const[name,setName]=useState()
    const[email,setEmail]=useState()
    const[message,setMessage]=useState()
    const contactme=(e)=>{
        e.preventDefault()
        console.log(name,email,message)
        try {
            fetch(`${API_URL}/contactme`,{
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                },
                body:JSON.stringify({
                    name,email,message
                })
            }).then(res=>res.json())
            .then((data)=>{
                if(data.status==true){
                    alert(data.message)
                    setName("")
                    setEmail("")
                    setMessage("")
                }else{
                    alert(data.message)
                }
            })
        } catch (error) {
            alert(error)
        }
       
    }

    return (
        <>
            
            <div style={{ height: "10vh" }}>

            </div>
            <div class="contact-page main">
                <h2>Get in touch</h2>
                <div class="contact-info">
                    <div class="item">
                        <i class="icon fas fa-home"></i>
                        Bhubaneswar, Odisha
                    </div>
                    <div class="item">
                        <i class="icon fas fa-phone"></i>
                        +91 7008774494
                    </div>
                    <div class="item">
                        <i class="icon fas fa-envelope"></i>
                        memoriallibrary@gmail.com
                    </div>
                    <div class="item">
                        <i class="icon fas fa-clock"></i>
                        Mon - Fri 8:00 AM to 6:00 PM
                    </div>
                </div>
                <form action="" class="contact-form" onSubmit={(e)=>contactme(e)}>
                    <input type="text" class="textb" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <input type="email" class="textb" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                    <textarea placeholder="Your Message" value={message} onChange={(e)=>setMessage(e.target.value)} required></textarea>
                    <input type="submit" class="btn" value='Send' />
                </form>
            </div>

        </>
    )
}
