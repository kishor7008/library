import React from 'react'
import EmployeeHeading from './EmployeeHeader'

export default function Approve() {
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
                                                    <div class="py-2 text-uppercase">Remove</div>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <th scope="row" class="border-0">
                                                    <div class="p-2">
                                                        <img src="https://bootstrapious.com/i/snippets/sn-cart/product-1.jpg" alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                        <div class="ml-3 d-inline-block align-middle">
                                                            <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block align-middle">Timex Unisex Originals</a></h5><span class="text-muted font-weight-normal font-italic d-block">Category: Watches</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td class="border-0 align-middle"><strong>$79.00</strong></td>
                                                <td class="border-0 align-middle"><strong>3</strong></td>
                                                <td class="border-0 align-middle"><a href="#" class="text-dark"><i class="fa-solid fa-circle-xmark"></i></a></td>
                                            </tr>
                                            <tr>
                                                <th scope="row">
                                                    <div class="p-2">
                                                        <img src="https://bootstrapious.com/i/snippets/sn-cart/product-2.jpg" alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                        <div class="ml-3 d-inline-block align-middle">
                                                            <h5 class="mb-0"><a href="#" class="text-dark d-inline-block">Lumix camera lense</a></h5><span class="text-muted font-weight-normal font-italic">Category: Electronics</span>
                                                        </div>
                                                    </div>
                                                </th>
                                                <td class="align-middle"><strong>$79.00</strong></td>
                                                <td class="align-middle"><strong>3</strong></td>
                                                <td class="align-middle"><a href="#" class="text-dark"><i class="fa-solid fa-circle-xmark"></i></a>
                                                </td>
                                            </tr>
                                            {/* <tr>
                                                <th scope="row"></th>
                                                <div class="p-2">
                                                    <img src="https://bootstrapious.com/i/snippets/sn-cart/product-3.jpg" alt="" width="70" class="img-fluid rounded shadow-sm" />
                                                    <div class="ml-3 d-inline-block align-middle">
                                                        <h5 class="mb-0"> <a href="#" class="text-dark d-inline-block">Gray Nike running shoe</a></h5><span class="text-muted font-weight-normal font-italic">Category: Fashion</span>
                                                    </div>
                                                </div>
                                                <td class="align-middle"><strong>$79.00</strong></td>
                                                <td class="align-middle"><strong>3</strong></td>
                                                <td class="align-middle"><a href="#" class="text-dark"><i class="fa fa-trash"></i></a>
                                                </td>
                                            </tr> */}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}
