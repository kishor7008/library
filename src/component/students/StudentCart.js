import React, { useEffect, useState } from 'react'
import StudentHeading from './StudentHeading'
import { API_URL } from '../../App'
import { Loader } from "rsuite";
import { Link } from 'react-router-dom'
export default function StudentCart() {
    let token=localStorage.getItem("token")
    const[list,setList]=useState([])
    const[ammount,setAmmount]=useState(0)
    const [loder, setLoder] = useState(true);
    // const [price, setPrice] = useState(0);
    const cartDetails=()=>{
        fetch(`${API_URL}/cart/details`,{
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Accept:"aplication/json",
                "Authorization":`Bearer ${token}`
            }
        }).then(res=>res.json())
        .then(data=>{
            if(data.status==true){
                let ammount=0;
                data.message.cart.map((item)=>{
                    ammount+=item.price
                })
                setAmmount(ammount)
                setList(data.message.cart)
                
               
                setLoder(false)
            }else{
                alert(data.mesage)
            }
        }).catch(err=>alert(err.message))
        }
        useEffect(()=>{
            cartDetails()
            // totalAmmount()
        },[])
        const deleteCart=(id)=>{
            fetch(`${API_URL}/delete/item/cart/${id}`,{
                method:"DELETE",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json",
                    "Authorization":`Bearer ${token}`
                }
            }).then(res=>res.json())
            .then(data=>{
                if(data.status==true){
                    cartDetails()
                   
                     alert(data.message)
                }else{
                    alert(data.message)
    
                }
            }).catch(err=>alert(err.message))
        }



    return (

<>
<StudentHeading/>
<div style={{height:"10vh"}}></div>
<section class="h-100 h-custom">
  <div class="container h-100 py-5">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col">

        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th scope="col" class="h5">List</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Price</th>
                <th scope="col">Remove</th>
              </tr>
            </thead>
            <tbody>

            {loder ? <><div style={{width:"100%",height:"50vh",textAlign:"center"}}>

<Loader speed="fast" size="lg" style={{width:"400px"}} />
<hr />
</div></> : list.map((item,index)=>(
                <>
                  <tr>
              <td><img src={item.image}/></td>
               
                <td>
                <div>{item.category}</div>
                <div>{item.name}</div>
               </td>
                <td class="align-middle">
                  <div class="d-flex flex-row">
                    <button className='bg-info'>-</button>
                    <input style={{width:"50px"}} value="2"/>
                    <button className='bg-primary'>+</button>
                   </div>
                </td>
                <td class="align-middle">
                  <p class="mb-0" style={{fontWeight: "500"}}>{item.price}</p>
                </td>
                <td class="align-middle">
                <i class="fa-solid fa-trash" style={{cursor:"pointer"}} onClick={()=>deleteCart(item._id)}></i>
                </td>
              </tr>
                </>
            )) }
             
            </tbody>
          </table>
        </div>

        <div class="card shadow-2-strong mb-5 mb-lg-0" style={{borderRadius: "16px"}}>
          <div class="card-body p-4">

            <div class="row">
              <div class="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                <form>
                  <div class="d-flex flex-row pb-3">
                    <div class="d-flex align-items-center pe-2">
                      <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel1v"
                        value="" aria-label="..." checked />
                    </div>
                    <div class="rounded border w-100 p-3">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                        Card
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-row pb-3">
                    <div class="d-flex align-items-center pe-2">
                      <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel2v"
                        value="" aria-label="..." />
                    </div>
                    <div class="rounded border w-100 p-3">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fab fa-cc-visa fa-2x fa-lg text-dark pe-2"></i>Debit Card
                      </p>
                    </div>
                  </div>
                  <div class="d-flex flex-row">
                    <div class="d-flex align-items-center pe-2">
                      <input class="form-check-input" type="radio" name="radioNoLabel" id="radioNoLabel3v"
                        value="" aria-label="..." />
                    </div>
                    <div class="rounded border w-100 p-3">
                      <p class="d-flex align-items-center mb-0">
                        <i class="fab fa-cc-paypal fa-2x fa-lg text-dark pe-2"></i>PayPal
                      </p>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-md-6 col-lg-4 col-xl-6">
                <div class="row">
                  <div class="col-12 col-xl-6">
                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                        placeholder="John Smith" />
                      <label class="form-label" for="typeName">Name on card</label>
                    </div>

                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YY"
                        size="7"  minlength="7" maxlength="7" />
                      <label class="form-label" for="typeExp">Expiration</label>
                    </div>
                  </div>
                  <div class="col-12 col-xl-6">
                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                        placeholder="1111 2222 3333 4444" minlength="19" maxlength="19" autoComplete='false'/>
                      <label class="form-label" for="typeText">Card Number</label>
                    </div>

                    <div class="form-outline mb-4 mb-xl-5">
                      <input type="password" id="typeText" class="form-control form-control-lg"
                        placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                      <label class="form-label" for="typeText">Cvv</label>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-xl-3">
                <div class="d-flex justify-content-between" style={{fontWeight: "500"}}>
                  <p class="mb-2">Subtotal</p>
                  <p class="mb-2">${ammount}</p>
                </div>

                <div class="d-flex justify-content-between" style={{fontWeight: "500"}}>
                  <p class="mb-0">Shipping</p>
                  <p class="mb-0">$20</p>
                </div>

                <hr class="my-4"/>

                <div class="d-flex justify-content-between mb-4" style={{fontWeight: "500"}}>
                  <p class="mb-2">Total (tax included)</p>
                  <p class="mb-2">${ammount+20}</p>
                </div>

                <button type="button" class="btn btn-primary btn-block btn-lg">
                  <div class="d-flex justify-content-center">
                    <span>Checkout</span>
                    {/* <span>$26.48</span> */}
                  </div>
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</section>
</>
    )
}
