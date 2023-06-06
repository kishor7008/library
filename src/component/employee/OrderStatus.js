import React from 'react'
import EmployeeHeading from './EmployeeHeader'

export default function OrderStatus() {
    return (
        <>
            <EmployeeHeading />
            <div style={{ height: "20vh" }}></div>
            <div class="table-wrapper">
                <div class="table-title">
                    <div class="row">
                        <div class="col-sm-6"><h2>Order <b>Status</b></h2></div>
                        <div class="col-sm-6">
                            <div class="btn-group" data-toggle="buttons">
                                <label class="btn btn-info active">
                                    <input type="radio" name="status" value="all" checked="checked" /> All
                                </label>
                                <label class="btn btn-success">
                                    <input type="radio" name="status" value="active" /> Active
                                </label>
                                <label class="btn btn-warning">
                                    <input type="radio" name="status" value="inactive" /> Inactive
                                </label>
                                <label class="btn btn-danger">
                                    <input type="radio" name="status" value="expired" /> Expired
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <table class="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Domain</th>
                            <th>Created&nbsp;On</th>
                            <th>Status</th>
                            <th>Server&nbsp;Location</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr data-status="active">
                            <td>1</td>
                            <td><a href="#">loremvallis.com</a></td>
                            <td>04/10/2013</td>
                            <td><span class="label label-success">Active</span></td>
                            <td>Buenos Aires</td>
                            <td><a href="#" class="btn btn-lg manage">Manage</a></td>
                        </tr>
                        <tr data-status="inactive">
                            <td>2</td>
                            <td><a href="#">quisquamut.net</a></td>
                            <td>05/08/2014</td>
                            <td><span class="label label-warning">Inactive</span></td>
                            <td>Australia</td>
                            <td><a href="#" class="btn btn-lg manage">Manage</a></td>
                        </tr>
                        <tr data-status="active">
                            <td>3</td>
                            <td><a href="#">convallissed.com</a></td>
                            <td>11/05/2015</td>
                            <td><span class="label label-success">Active</span></td>
                            <td>United Kingdom</td>
                            <td><a href="#" class="btn btn-lg manage">Manage</a></td>
                        </tr>
                        <tr data-status="expired">
                            <td>4</td>
                            <td><a href="#">phasellusri.org</a></td>
                            <td>06/09/2016</td>
                            <td><span class="label label-danger">Expired</span></td>
                            <td>Romania</td>
                            <td><a href="#" class="btn btn-lg manage">Manage</a></td>
                        </tr>
                        <tr data-status="inactive">
                            <td>5</td>
                            <td><a href="#">facilisleo.com</a></td>
                            <td>12/08/2017</td>
                            <td><span class="label label-warning">Inactive</span></td>
                            <td>Germany</td>
                            <td><a href="#" class="btn btn-lg manage">Manage</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}
