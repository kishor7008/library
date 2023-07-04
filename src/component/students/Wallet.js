import React from "react";
import "./wallet.css";
import StudentHeading from "./StudentHeading";
export default function Wallet() {
  return (
    <>
      <StudentHeading />
      <div style={{height:"10vh"}}></div>
     <div style={{width:"95%",height:"30vh",display:"flex",justifyContent:"left",margin:"auto"}}>
            <div><img src="https://images.indianexpress.com/2020/10/visa-credit-debit-cards-bloomberg-1200.jpg" style={{width:"500px",height:"30vh",borderRadius:"30px"}}/></div>

            <div style={{margin:"20px"}}>
            <h3>Wallet</h3>
            <div>1000.00</div>
            </div>
            
     </div>
     <div style={{height:"3vh"}}></div>

     <div style={{width:"95%",height:"50vh",border:"5px solid white",margin:"auto",borderRadius:"20px"}}>
      <div style={{margin:"10px"}}>History</div>
      </div>
    </>
  );
}
