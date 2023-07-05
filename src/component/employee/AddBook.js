import React, { useState } from "react";
import "./addbook.css";
import EmployeeHeading from "./EmployeeHeader";
import { API_URL } from "../../App";
import { capitalize } from "@mui/material";
export default function AddBook() {
  const [category, setCategory] = useState("");
  const [author, setAuthor] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
const token=localStorage.getItem("token")
  const addBook = (e) => {
    e.preventDefault();
    fetch(`${API_URL}/add/book/admin`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json",
            Accept:"application/json",
            "Authorization":`Bearer ${token}`
        },
        body:JSON.stringify(
           { name,category,author,desciption:des,price,quantity,image}
        )
    }).then(res=>res.json())
    .then(data=>{
        if(data.status==true){
            alert(data.message)
            setName("")
            setCategory("")
            setPrice("")
            setImage("")
            setName("")
            setQuantity("")
            setDes("")
            setAuthor("")
        }else{
            alert(data.message)
        }
    }).catch(err=>{
        alert(err.message)
    })
  };

  return (
    <>
      <EmployeeHeading />
      <div class="container-fluid px-1 py-5 mx-auto dexo">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="card">
              <form class="form-card" onSubmit={(e) => addBook(e)}>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3">
                      Book Category<span class="text-danger"> *</span>
                    </label>
                    <select
                      style={{ height: "6vh", marginTop: "6px" }}
                      value={category}
                      onChange={(e) => setCategory(e.target.value)}
                    >
                      <option value="Literary Fiction">Literary Fiction</option>
                      <option value="History">History</option>
                      <option value="Religion and Mythology">
                        Religion and Mythology
                      </option>
                      <option value="Historical Fiction">
                        Historical Fiction
                      </option>
                      <option value="Mythological Fiction">
                        Mythological Fiction
                      </option>
                      <option value="Thriller and Mystery">
                        Thriller and Mystery
                      </option>
                      <option value="Sci-Fi and Fantasy">
                        Sci-Fi and Fantasy
                      </option>
                      <option value="Humour">Humour</option>
                      <option value="Chick-lit">Chick-lit</option>
                      <option value="Biography and Memoir">
                        Biography and Memoir
                      </option>
                      <option value="Self-Help">Self-Help</option>
                      <option value="Travel and Places">
                        Travel and Places
                      </option>
                    </select>
                  </div>

                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Book name<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="lname"
                      name="lname"
                      placeholder="Enter your last name"
                      onblur="validate(2)"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={{textDecoration:"capitalize"}}

                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3" >
                      Author<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onblur="validate(3)"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      style={{textDecoration:"capitalize"}}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Image Url<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onblur="validate(4)"
                      value={image}
                      onChange={(e) => setImage(e.target.value)}
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Price<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder=""
                      onblur="validate(3)"
                      value={price}
                      onChange={(e) => setPrice(e.target.value)}
                    />{" "}
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                     Quantity<span class="text-danger"> *</span>
                    </label>{" "}
                    <input
                      type="text"
                      id="mob"
                      name="mob"
                      placeholder=""
                      onblur="validate(4)"
                      value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}
                    />{" "}
                  </div>
                </div>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-12 flex-column d-flex">
                    {" "}
                    <label class="form-control-label px-3">
                      Description<span class="text-danger">*</span>
                    </label>{" "}
                    <textarea
                      type="textarea"
                      id="job"
                      name="email"
                      class="bg-white text-dark"
                      placeholder=""
                      value={des}
                      onChange={(e) => setDes(e.target.value)}
                    ></textarea>
                  </div>
                </div>

                <div class="row justify-content-end">
                  <div class="form-group col-sm-6">
                    {" "}
                    <button type="submit" class="btn-block btn-primary">
                      Add Book
                    </button>{" "}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
