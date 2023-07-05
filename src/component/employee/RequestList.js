import React, { useEffect, useState } from 'react'
import './requestList.css'
import { Loader } from "rsuite";

import { API_URL } from '../../App'
import { dateTime } from './OrderStatus'
import EmployeeHeading from './EmployeeHeader'
export default function RequestList() {
    const [list,setList]=useState([])
  const [loder, setLoder] = useState(true);

    let token=localStorage.getItem("token")
    const getList=()=>{
fetch(`${API_URL}/request/list`,{
    method:"GET",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Authorization":`Bearer ${token}`
    }
}).then(res=>res.json())
.then(data=>{
    if(data.status==true){
        setList(data.message)
        setLoder(false)
    }else{
        alert(data.message)
    }
}).catch(err=>alert(err.message))
    }

    useEffect(()=>{
        getList()
    },[])
    return (
        <>

            <EmployeeHeading />
            <div style={{ height: "20vh" }}></div>
            <div class="container" style={{ width: "100%" }}>
                <div class="row"  style={{ width: "100%" }}>
                    <div class="col-md-offset-1 col-md-10"  style={{ width: "100%" }}>
                        <div class="panel"  style={{ width: "100%" }} >
                            <div class="panel-heading">
                                <div class="row">
                                    <div class="col col-sm-3 col-xs-12">
                                        <h4 class="title">Data <span>List</span></h4>
                                    </div>
                                    <div class="col-sm-9 col-xs-12 text-right">
                                        <div class="btn_group">
                                            <input type="text" class="form-control" placeholder="Search" />
                                            <button class="btn btn-default" title="Reload"><i class="fa fa-sync-alt"></i></button>
                                            <button class="btn btn-default" title="Pdf"><i class="fa fa-file-pdf"></i></button>
                                            <button class="btn btn-default" title="Excel"><i class="fas fa-file-excel"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="panel-body table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Full Name</th>
                                            <th>Book Name</th>
                                            <th>Post Date</th>
                                            <th>Country</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            loder ? <>
                                            <div style={{width:"100%",height:"50vh",textAlign:"center"}}>
                                
                                              <Loader speed="fast" size="lg" style={{width:"400px"}} />
                                              <hr />
                                              </div>
                                              
                                            </> : list.map((item,index)=>(
                                                <>
                                                <tr>
                                            <td>{index+1}</td>
                                            <td>{item.student.name}</td>
                                            <td>{item.name}</td>
                                            <td>{dateTime(item.createdAt)}</td>
                                            <td>{item.student.country}</td>
                                            <td>
                                                <ul class="action-list">
                                                    <li><a href="#" data-tip="edit"><i class="fa fa-edit"></i></a></li>
                                                    <li><a href="#" data-tip="delete"><i class="fa fa-trash"></i></a></li>
                                                </ul>
                                            </td>
                                        </tr>
                                                </>
                                            ))
                                        }
                                      
                                    </tbody>
                                </table>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
