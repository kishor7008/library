import React, { useEffect, useState } from 'react'
import './orderDetails.css'
import { Loader } from "rsuite";

import { API_URL } from '../../App'
import StudentHeading from './StudentHeading'
import OrderTable from './OrderTable'
import './OrderTable.css'
import { dateTime } from '../employee/OrderStatus'
// import { useScrollTrigger } from '@mui/material'
export default function OrderDetails() {
  const [loder, setLoder] = useState(true);

    const [list,setList]=useState()
    const[name,setName]=useState()
    let token=localStorage.getItem("token")
    const allOrder=()=>{
     fetch(`${API_URL}/order/details`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Authorization":`Bearer ${token}`
        }
     }).then(res=>res.json())
     .then(data=>{
        console.log(data)
        if(data.status==true){
            setList(data.message)
            setLoder(false);
        }else{
            alert(data.message)
        }
     })
    }
    useEffect(()=>{
        allOrder()
    },[])
    return (
       
        <>
            <StudentHeading />
            <div style={{height:"10vh"}}></div>
            <div class="container">
        <div class="table-wrapper" style={{width:"90% !important",background:"pink"}}>
            
			
            <table class="table table-striped table-hover">
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product Name</th>
						<th>Created Date</th>
						<th>Return Date</th>						
                        <th>Status</th>						
						<th>Quantity</th>
						<th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {loder ? (
            <>
            <div style={{width:"100%",height:"50vh",margin:"auto"}}>

              <Loader speed="fast" size="lg" style={{width:"400px"}} />
              <hr />
              </div>
              </>
          ) :
                     list.map((item,index)=>(
                            <>
                            <tr>
                        <td>{item.orderId}</td>
                        <td> {item.bookDetails.name}</td>
						<td>{dateTime(item.createdAt)}</td>
                        <td>{item.day}</td>                        
						<td><span class="text-primary" style={{fontWeight:"bold"}}>{item.status}</span> </td>
						<td>{item.bookDetails.quantity}</td>
						<td>{item.bookDetails.price}</td>
                    </tr>
                            </>
                        ))
                    }
                    
					
                </tbody>
            </table>
			
        </div>
    </div> 
        </>
    )
}
