import React from 'react'
import StudentHeading from './StudentHeading'
import { useNavigate } from 'react-router-dom'
import { API_URL } from '../../App'
export default function OrderPayment() {
  const navigate=useNavigate()
  let token=localStorage.getItem("token")
    let book=JSON.parse(localStorage.getItem("book"))
    const orderComplete=(e)=>{
        e.preventDefault()
        fetch(`${API_URL}/buy/book`,{
            method:"POST",
            headers:{
                "Content-type":"application/json",
                Accept:"application/json",
                "Authorization":`Bearer ${token}`

            },
            body:JSON.stringify({

                bookId:book.bookId,
                quantity:book.quantity,
                day:book.day

            })
        }).then(res=>res.json())
        .then(data=>
         
          {
if(data.status==true){
alert("Order Create Succesfully")
navigate("/student_home")
}else{
alert(data.message)
}
          }).catch(err=>alert(err.message))
        return false; 
    }
  return (
   <>
   <StudentHeading/>
   <div style={{height:"5vh"}}></div>
<section>
  {/* <form> */}
  <div class="row" style={{width:"80%",margin:"auto"}}>
    <div class="col-md-8 mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Biling details</h5>
        </div>
        <div class="card-body">
          
            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form6Example1" class="form-control" required />
                  <label class="form-label" for="form6Example1">First name</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="form6Example2" class="form-control" required/>
                  <label class="form-label" for="form6Example2">Last name</label>
                </div>
              </div>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="form6Example3" class="form-control" required/>
              <label class="form-label" for="form6Example3">Company name</label>
            </div>

            <div class="form-outline mb-4">
              <input type="text" id="form6Example4" class="form-control" required/>
              <label class="form-label" for="form6Example4">Address</label>
            </div>

            <div class="form-outline mb-4">
              <input type="email" id="form6Example5" class="form-control" required/>
              <label class="form-label" for="form6Example5">Email</label>
            </div>

            <div class="form-outline mb-4">
              <input type="number" id="form6Example6" class="form-control" required/>
              <label class="form-label" for="form6Example6">Phone</label>
            </div>

            <hr class="my-4" />

            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="checkoutForm1" required />
              <label class="form-check-label" for="checkoutForm1">
                Shipping address is the same as my billing address
              </label>
            </div>

            <div class="form-check mb-4">
              <input class="form-check-input" type="checkbox" value="" id="checkoutForm2" checked required/>
              <label class="form-check-label" for="checkoutForm2">
                Save this information for next time
              </label>
            </div>

            <hr class="my-4" />

            <h5 class="mb-4">Payment</h5>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm3"
                checked required/>
              <label class="form-check-label" for="checkoutForm3">
                Credit card
              </label>
            </div>

            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm4" required/>
              <label class="form-check-label" for="checkoutForm4">
                Debit card
              </label>
            </div>

            <div class="form-check mb-4">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="checkoutForm5" required/>
              <label class="form-check-label" for="checkoutForm5">
                Paypal
              </label>
            </div>

            <div class="row mb-4">
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="formNameOnCard" class="form-control" required/>
                  <label class="form-label" for="formNameOnCard">Name on card</label>
                </div>
              </div>
              <div class="col">
                <div class="form-outline">
                  <input type="text" id="formCardNumber" class="form-control" required/>
                  <label class="form-label" for="formCardNumber">Credit card number</label>
                </div>
              </div>
            </div>

            <div class="row mb-4">
              <div class="col-3">
                <div class="form-outline">
                  <input type="text" id="formExpiration" class="form-control" required/>
                  <label class="form-label" for="formExpiration">Expiration</label>
                </div>
              </div>
              <div class="col-3">
                <div class="form-outline">
                  <input type="text" id="formCVV" class="form-control" required/>
                  <label class="form-label" for="formCVV">CVV</label>
                </div>
              </div>
            </div>

            <button class="btn btn-primary btn-lg btn-block"  onClick={(e)=>orderComplete(e)}>
             Pay 
            </button>
          
        </div>
      </div>
    </div>

    <div class="col-md-4 mb-4">
      <div class="card mb-4">
        <div class="card-header py-3">
          <h5 class="mb-0">Summary</h5>
          <img src={book.bookImage}/>
          <p>Name : {book.bookName}</p>
          <p>Author : {book.bookAuthor}</p>
        </div>
        <div class="card-body">
          <ul class="list-group list-group-flush">
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Price
              <span style={{marginLeft:"20px"}}>${book.bookPrice}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              QNT
              <span style={{marginLeft:"20px"}}>{book.quantity}</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              RTN
              <span style={{marginLeft:"20px"}}>{book.day}</span>
            </li>
        <li class="list-group-item d-flex justify-content-between align-items-center px-0">
              Taxs
              <span style={{marginLeft:"20px"}}>15%</span>
            </li>
            <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>Total amount</strong>
               
              </div>
              
              <span style={{marginLeft:"30px"}}><strong>${15*(book.bookPrice*book.quantity)/100+book.bookPrice}</strong></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  {/* </form> */}
</section>
   </>
  )
}
