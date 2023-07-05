import React, { useEffect, useState } from "react";
import "./bookCard.css";
import { API_URL } from "../../App";
import { Loader } from "rsuite";
export default function BookCard() {
  const [book, setBook] = useState([]);
  const [loder, setLoder] = useState(true);
  const bookList = async () => { 
    fetch(`${API_URL}/getbook`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setLoder(false);
        setBook(data.message);
      }).catch(err=>alert(err.message))
  };
  useEffect(() => {
    bookList();
  }, []);
  return (
    <>
      <div class="container mt-2">
        <div class="row">
          {loder ? (
            <>
            <div style={{width:"100%",height:"50vh",textAlign:"center"}}>

              <Loader speed="fast" size="lg" style={{width:"400px"}} />
              <hr />
              </div>
              </>
          ) : (
            book.map((item) => (
              <>
                <div class="col-md-3 col-sm-6">
                  <div class="card card-block">
                    <div class="card-title text-left" style={{textDecoration:"none",height:"7vh",overflow:"hidden"}}>
                      Author : {item.author}
                    </div>
                    <img src={item.image} alt="Photo of sunset" class="img4"   style={{width:"100%",height:"200px"}}/>
                    <h5 class="card-title mt-3 mb-3" style={{textDecoration:"none",height:"10vh",overflow:"hidden"}} >{item.name}</h5>
                    
                  </div>
                </div>
              </>
            ))
          )}
        </div>
      </div>
    </>
  );
}
