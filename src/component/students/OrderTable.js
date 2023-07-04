import React from 'react'
import './OrderTable.css'
export default function OrderTable() {
  return (
    <>
    <div class="container">
        <div class="table-wrapper">
            
			
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
                    <tr>
                        <td>1</td>
                        <td><a href="#"><img src="/examples/images/avatar/1.jpg" class="avatar" alt="Avatar"/> Michael Holz</a></td>
						<td>London</td>
                        <td>Jun 15, 2017</td>                        
						<td><span class="status text-success">&bull;</span> Delivered</td>
						<td>$254</td>
						<td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
					<tr>
                        <td>2</td>
                        <td><a href="#"><img src="/examples/images/avatar/2.jpg" class="avatar" alt="Avatar"/> Paula Wilson</a></td>
                        <td>Madrid</td>                       
						<td>Jun 21, 2017</td>
						<td><span class="status text-info">&bull;</span> Shipped</td>
						<td>$1,260</td>
						<td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
					<tr>
                        <td>3</td>
                        <td><a href="#"><img src="/examples/images/avatar/3.jpg" class="avatar" alt="Avatar"/> Antonio Moreno</a></td>
						<td>Berlin</td>
                        <td>Jul 04, 2017</td>
                        <td><span class="status text-danger">&bull;</span> Cancelled</td>
						<td>$350</td>
						<td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>                        
                    </tr>
					<tr>
                        <td>4</td>
                        <td><a href="#"><img src="/examples/images/avatar/4.jpg" class="avatar" alt="Avatar"/> Mary Saveley</a></td>
						<td>New York</td>
                        <td>Jul 16, 2017</td>						
						<td><span class="status text-warning">&bull;</span> Pending</td>
						<td>$1,572</td>
						<td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
					<tr>
                        <td>5</td>
                        <td><a href="#"><img src="/examples/images/avatar/5.jpg" class="avatar" alt="Avatar"/> Martin Sommer</a></td>
						<td>Paris</td>
                        <td>Aug 04, 2017</td>
						<td><span class="status text-success">&bull;</span> Delivered</td>
						<td>$580</td>
						<td><a href="#" class="view" title="View Details" data-toggle="tooltip"><i class="material-icons">&#xE5C8;</i></a></td>
                    </tr>
                </tbody>
            </table>
			
        </div>
    </div> 
    </>
  )
}
