import React, { useEffect, useState } from 'react'
import EmployeeHeading from './EmployeeHeader'
import { API_URL } from '../../App'
export default function Approve() {
    const [data, setData] = useState([])

    const pendingList = () => {
        fetch(`${API_URL}/order/Pending`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }

        }).then(res => res.json())
            .then(data => {
                // console.log(data.message)
                setData(data.message)

            })
    }

    const approveOrder = (id) => {
        console.log(id)
        fetch(`${API_URL}/approve/order/${id}/Approved`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            }

        }).then(res => res.json())
            .then(data => {
                console.log(data)
                // setData(data.message)

            })

    }
    useEffect(() => {
        pendingList()
    }, [])
    // console.log(data, "lime 25")
    return (
        <>
            <EmployeeHeading />
            <div style={{ height: "20vh" }}></div>
            <div class="px-4 px-lg-0">

                <div class="pb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-12 p-5 bg-white rounded shadow-sm mb-5">

                                <div class="table-responsive">
                                    <table class="table">
                                        <thead>
                                            <tr>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="p-2 px-3 text-uppercase">Product</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Price</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Quantity</div>
                                                </th>
                                                <th scope="col" class="border-0 bg-light">
                                                    <div class="py-2 text-uppercase">Status</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {data && data.map((item) => (
                                                <>
                                                    <tr>
                                                        <th scope="row" class="border-0">
                                                            <div class="p-2">
                                                                <img src={item.bookDetails.image} alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                                <div class="ml-3 d-inline-block align-middle">
                                                                    <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">{item.bookDetails.name}</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: {item.bookDetails.category}</span>
                                                                </div>
                                                            </div>
                                                        </th>
                                                        <td class="border-0 align-middle"><strong>{item.bookDetails.price}</strong></td>
                                                        <td class="border-0 align-middle"><strong>{item.bookDetails.quantity}</strong></td>
                                                        <td class="border-0 align-middle"><button className='bg-danger' onClick={() => approveOrder(item._id)}>Pending</button></td>
                                                    </tr >
                                                </>
                                            )

                                            )}

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div >

        </>
    )
}
