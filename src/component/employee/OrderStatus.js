import React, { useEffect, useState } from 'react'
import EmployeeHeading from './EmployeeHeader'
import { useScrollTrigger } from '@mui/material'
import { API_URL } from '../../App'
import OrderDetailsCard from './OrderDetailsCard'
export default function OrderStatus() {
    const [orderType, setOrderType] = useState("Pending")
    const [data, setData] = useState([])
    const [searchShow, setSearchShow] = useState(false)
    const [listShow, setListShow] = useState(true)
    const [cardShow, setCardShow] = useState(false)
    const [inputText, setInputText] = useState("")
    const [details, setDetails] = useState()
    const changeType = (data) => {
        setOrderType(data)

    }

    const getDetails = () => {
        fetch(`${API_URL}/order/details/${inputText}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }

        }).then(res => res.json())
            .then(data => {
                console.log(data.message)
                setDetails(data.message)
                setListShow(false)
                setCardShow(true)
            })


    }


    const showData = (orderType) => {
        console.log(orderType, "line 14")
        fetch(`${API_URL}/order/${orderType}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }

        }).then(res => res.json())
            .then(data => {
                console.log(data.message)
                setData(data.message)
                setListShow(true)
                setCardShow(false)

            })
    }
    useEffect(() => {
        showData(orderType)
    }, [])
    useEffect(() => {
        showData(orderType)
    }, [orderType])
    console.log(orderType)
    return (
        <>
            <EmployeeHeading />
            <div style={{ height: "20vh" }}></div>
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">

                        <div class="col-sm-6">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-info active" onClick={() => changeType("Pending")}>
                                    Pending
                                </label>
                                <label class="btn btn-info active" onClick={() => changeType("Approved")}>
                                    Approved
                                </label>
                                <label class="btn btn-success" onClick={() => changeType("Received")}>
                                    Received
                                </label>
                                <label class="btn btn-warning" onClick={() => changeType("Return")}>
                                    Return
                                </label>
                                <label class="btn btn-danger" onClick={() => changeType("Complete")}>
                                    Complete
                                </label>
                                <label class="btn btn-danger" onClick={() => changeType("Cancel")}>
                                    Cancel
                                </label>
                                <label class="btn btn-danger" onClick={() => setSearchShow(!searchShow)}>
                                    Search
                                </label>


                            </div>
                            {searchShow && <> <input onChange={(e) => setInputText(e.target.value)} /> <button onClick={getDetails}>Search</button></>}

                        </div>
                    </div>
                </div>
                {listShow && <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>Customer Name</th>
                            <th>Order ID</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Book Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data && data.map((item) => (
                                <tr data-status="active">
                                    <td>{item.student.name}</td>
                                    <td><a href="#">JHBHXBJXBH&&</a></td>
                                    <td>{item.updatedAt}</td>
                                    <td><button class="bg-primary">{item.status}</button></td>
                                    <td style={{ textTransform: "capitalize" }}>{item.bookDetails.name}</td>
                                    <td>{item.bookDetails.quantity}</td>
                                    <td>{item.bookDetails.price}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>}
                {cardShow && <OrderDetailsCard data={details} />}
            </div>
        </>
    )
}
