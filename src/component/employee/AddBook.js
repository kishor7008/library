import React from 'react'
import './addbook.css'
import EmployeeHeading from './EmployeeHeader'
export default function AddBook() {
    return (
        <>
            <EmployeeHeading />
            <div class="container-fluid px-1 py-5 mx-auto dexo">
                <div class="row d-flex justify-content-center">
                    <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                        <h3>Add Books</h3>
                        <div class="card">
                            <h5 class="text-center mb-4">Powering world-class companies</h5>
                            <form class="form-card" onsubmit="event.preventDefault()">
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Category<span class="text-danger"> *</span></label>  <select class="form-select" aria-label="Disabled select example"
                                        id="fname" name="fname">


                                        <option value="Literary Fiction">Literary Fiction</option>
                                        <option value="History">History</option>
                                        <option value="Religion and Mythology">Religion and Mythology</option>
                                        <option value="Historical Fiction">Historical Fiction</option>
                                        <option value="Mythological Fiction">Mythological Fiction</option>
                                        <option value="Thriller and Mystery">Thriller and Mystery</option>
                                        <option value="Sci-Fi and Fantasy">Sci-Fi and Fantasy</option>
                                        <option value="Humour">Humour</option>
                                        <option value="Chick-lit">Chick-lit</option>
                                        <option value="Biography and Memoir">Biography and Memoir</option>
                                        <option value="Self-Help">Self-Help</option>
                                        <option value="Travel and Places">Travel and Places</option>


                                    </select> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Book name<span class="text-danger"> *</span></label> <input type="text" id="lname" name="lname" placeholder="Enter your last name" onblur="validate(2)" /> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Author<span class="text-danger"> *</span></label> <input type="text" id="email" name="email" placeholder="" onblur="validate(3)" /> </div>
                                    <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Image Url<span class="text-danger"> *</span></label> <input type="text" id="mob" name="mob" placeholder="" onblur="validate(4)" /> </div>
                                </div>
                                <div class="row justify-content-between text-left">
                                    <div class="form-group col-sm-12 flex-column d-flex"> <label
                                        class="form-control-label px-3">Description<span class="text-danger">
                                            *</span></label> <textarea type="textarea" id="job" name="email" class="bg-white"
                                                placeholder=""></textarea>
                                    </div>
                                </div>

                                <div class="row justify-content-end">
                                    <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary">Add Book</button> </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
