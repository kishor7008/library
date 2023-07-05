import React, { useEffect, useState } from "react";
import EmployeeHeading from "./EmployeeHeader";
import { useScrollTrigger } from "@mui/material";
import { API_URL } from "../../App";
import OrderDetailsCard from "./OrderDetailsCard";
export const dateTime=(timestamp)=>{
  const date = new Date(timestamp);

// Extracting date components
const year = date.getFullYear();
const month = date.getMonth() + 1; // Months are zero-indexed, so we add 1
const day = date.getDate();

// Extracting time components
const hours = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

// Creating the formatted date and time string
const formattedDateTime = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')} ${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
return formattedDateTime
}
export default function OrderStatus() {
  const [orderType, setOrderType] = useState("Pending");
  const [data, setData] = useState([]);
  const [searchShow, setSearchShow] = useState(false);
  const [listShow, setListShow] = useState(true);
  const [cardShow, setCardShow] = useState(false);
  const [inputText, setInputText] = useState("");
  const [details, setDetails] = useState();
  const [orderStatus, setOrderStatus] = useState();
  const changeType = (data) => {
    setOrderType(data);
  };

  const getDetails = async() => {
    if(inputText==""){
      alert("Please Enter Order ID")
      return;
    }
    try {
      
    
    fetch(`${API_URL}/order/details/${inputText}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if(data.status==true){
          setDetails(data.message);
          setListShow(false);
          setCardShow(true);
        }else{
          alert(data.message)
        }
        
      }).catch(error=>{
      alert(error.message)

      })
      
    } catch (error) {
      alert(error.message)
    }
  };

  const showData = (orderType) => {
    fetch(`${API_URL}/order/${orderType}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.message);
        setListShow(true);
        setCardShow(false);
        setSearchShow(false);
        if (orderType == "Pending") {
          setOrderStatus("Approved");
        } else if (orderType == "Approved") {
          setOrderStatus("Received");
        } else if (orderType == "Received") {
          setOrderStatus("Return");
        } else if (orderType == "Return") {
          setOrderStatus("Complete");
        } else {
        }
      });
  };
  let stateChange = (status, id) => {
    fetch(`${API_URL}/order/${id}/${status}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
      }).catch((err)=>{
        alert(err.message)
      })
  };
  useEffect(() => {
    showData(orderType);
  }, []);
  useEffect(() => {
    showData(orderType);
  }, [orderType]);

  
  return (
    <>
      <EmployeeHeading />
      <div style={{ height: "13vh" }}></div>
      <div class="table-wrapper">
        <div class="table-title">
          <div class="row">
            <div class="col-sm-6">
              <div class="btn-group" data-toggle="buttons">
                <label
                  class={`btn btn-info ${orderType == "Pending" && "bg-dark"}`}
                  onClick={() => changeType("Pending")}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Pending
                </label>
                <label
                  class={`btn btn-info ${orderType == "Approved" && "bg-dark"}`}
                  onClick={() => changeType("Approved")}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Approved
                </label>
                <label
                  class={`btn btn-info ${orderType == "Received" && "bg-dark"}`}
                  onClick={() => changeType("Received")}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Received
                </label>
                <label
                  class={`btn btn-info ${orderType == "Return" && "bg-dark"}`}
                  onClick={() => changeType("Return")}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Return
                </label>
                <label
                  class={`btn btn-info ${orderType == "Complete" && "bg-dark"}`}
                  onClick={() => changeType("Complete")}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Complete
                </label>
                <label
                  class={`btn btn-info ${orderType == "Cancel" && "bg-dark"}`}
                  onClick={() => changeType("Cancel")}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Cancel
                </label>
                <label
                  class={`btn btn-info `}
                  onClick={() => setSearchShow(!searchShow)}
                  style={{ fontWeight: "bold", fontSize: "16px" }}
                >
                  Search
                </label>
              </div>
              {searchShow && (
                <>
                  {" "}
                  <input onChange={(e) => setInputText(e.target.value)} style={{color:"black"}}/>{" "}
                  <button onClick={getDetails} class="bg-primary">Search</button>
                </>
              )}
            </div>
          </div>
        </div>
        {listShow.length!=0 ? (
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Order ID</th>
                <th>Create Date</th>
                <th>Return Date</th>
                <th>Status</th>
                <th>Book Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item) => (
                  <tr data-status="active" style={{textTransform:"capitalize"}}>
                    <td>{item.student.name}</td>
                    <td>
                      <a href="#">{item.orderId}</a>
                    </td>
                    <td>{dateTime(item.updatedAt)}</td>
                    <td>{dateTime(item.day)}</td>
                    <td>
                      <button
                        class="bg-primary"
                        onClick={() => stateChange(orderStatus, item.orderId)}
                        style={{fontWeight:"bold",color:"white"}}
                      >
                        {item.status}
                      </button>
                    </td>
                    <td style={{ textTransform: "capitalize" }}>
                      {item.bookDetails.name}
                    </td>
                    <td>{item.bookDetails.quantity}</td>
                    <td>{item.bookDetails.price}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        ):<div>No Data</div>}
        {cardShow && <OrderDetailsCard data={details}  func={setCardShow}/>}
      </div>
    </>
  );
}
