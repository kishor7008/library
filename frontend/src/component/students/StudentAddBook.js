import React from 'react'
import StudentHeading from './StudentHeading'
import { useState } from 'react'
import { API_URL } from '../../App'
export default function StudentAddBook() {
    const[book,setBook]=useState("")
let token=localStorage.getItem("token")
const addBook=()=>{
    if(book==""){
        alert("Book Name Empty")
        return;
    }
    fetch(`${API_URL}/add/book`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify({
            book
        })
    }).then(res=>res.json())
    .then(data=>{
        if(data.status==true){
            alert(data.message)
            setBook("")
        }else{
            alert(data.message)
        }
    }).catch(err=>alert(err.message))
}

    return (
        <>
           <StudentHeading/>
           <div style={{height:"20vh"}}></div>
           <div style={{width:"100%",margin:"10px"}}>
           <input type="text" style={{width:"60%",margin:"auto"}} value={book} onChange={(e)=>setBook(e.target.value)}/><button class="btn-primary" onClick={()=>addBook()}>Add Book Request</button>
           </div>
          
            <div class="row">
                <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                    <img
                        src="images/library/library.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />

                    <img
                        src="images/library/library1.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Wintry Mountain Landscape"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="images/library/library2.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Mountains in the Clouds"
                    />

                    <img
                        src="images/library/library3.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Boat on Calm Water"
                    />
                </div>

                <div class="col-lg-4 mb-4 mb-lg-0">
                    <img
                        src="images/library/library4.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Waves at Sea"
                    />

                    <img
                        src="images/library/library5.jpg"
                        class="w-100 shadow-1-strong rounded mb-4"
                        alt="Yosemite National Park"
                    />
                </div>
            </div>
        </>
    )
}
