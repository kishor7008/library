import React, { useState } from "react";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { API_URL } from "../../App";
export default function BuyBookCard() {
  const [show, setShow] = useState(false);
  const [inputText, setInputText] = useState("");
  const [data, setData] = useState([]);
  const [category, setCategory] = useState();
  const [name, setName] = useState();
  const [author, setAuthor] = useState();
  const [image, setImage] = useState();
  const [description, setDescription] = useState();
  const [bookId, setBookId] = useState();
  const [price, setPrice] = useState();
  const navigate = useNavigate();
  const getData = () => {
    fetch(`${API_URL}/find/book/${inputText}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.message);
        setAuthor(data.message.author);
        setImage(data.message.image);
        setName(data.message.name);
        setCategory(data.message.category);
        setBookId(data.message._id);
        setDescription(data.message.description);
        setPrice(data.message.price);
      });
    setShow(true);
  };

  const buy = () => {
    let bookDetails = {
      category,
      name,
      author,
      image,
      description,
      price,
      bookId,
    };
    localStorage.setItem("bookDetails", JSON.stringify(bookDetails));
    navigate("/customer_details");
  };

  return (
    <>
      <div style={{ width: "60%", display: "flex", marginLeft: "30px" }}>
        <input
          type="text"
          placeholder="Please Search Book By Name"
          style={{
            width: "100%",
            height: "5.5vh",
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",

          }}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <img
          src="https://static.vecteezy.com/system/resources/previews/015/130/502/original/search-book-icon-png.png"
          style={{
            width: "50px",
            height: "40px",
            alignContent: "center",
            marginTop: "5px",
            textAlign: "center",
            padding: "2px",
            cursor: "pointer",
          }}
          onClick={getData}
        />
      </div>
      {show ? (
        <MDBCard style={{ maxWidth: "60%", margin: "auto" }}>
          <MDBRow className="g-0" style={{ margin: "auto" }}>
            <MDBCol md="4">
              <MDBCardImage src={image} alt={name} fluid />
            </MDBCol>
            <MDBCol md="8">
              <MDBCardBody>
                <Button>{name}</Button>
                <MDBCardText>{description}</MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Author : {author}</small>
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Category : {category}</small>
                </MDBCardText>
                <MDBCardText>
                  <small className="text-muted">Price : {price} /day</small>
                </MDBCardText>
                <button class="btn btn-primary" onClick={buy}>
                  Buy
                </button>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      ) : (
        <div style={{ width: "100%", height: "50vh", margin: "auto" }}>
          <div >

          </div>
        </div>
      )}
    </>
  );
}
