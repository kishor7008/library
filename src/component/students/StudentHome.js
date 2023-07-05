import React, { useState, useEffect } from "react";
import axios from "axios";
import './BookList'
import Slider from "./Slider";
import { Loader } from "rsuite";
import { useNavigate } from "react-router-dom";
import {
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol
  } from 'mdb-react-ui-kit';
import Box from '@mui/material/Box';
import { Dialog } from "@mui/material";
import TextField from '@mui/material/TextField';
import '../employee/employeeModal.css'
import Button from '@mui/material/Button';
import { API_URL } from "../../App";
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from "react-router-dom";
const BASE_URL = "https://movie-list.alphacamp.io";
const INDEX_URL = BASE_URL + "/api/v1/movies/";
const POSTER_URL = BASE_URL + "/posters/";
const MOVIES_PER_PAGE = 12;


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: 400,
    // bgcolor:"background.paper"
    // boxShadow: 24,

};
const StudentHome = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentMode, setCurrentMode] = useState("card");
    const [currentSearch, setCurrentSearch] = useState("off");
    const [errorMode, setErrorMode] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = React.useState(false);



    const [bookName, setBookName] = useState()
    const [bookCategory, setBookCategory] = useState()
    const [bookAuthor, setBookAuthor] = useState()
    const [bookImage, setBookImage] = useState()
    const [bookDes, setBookDes] = useState()
    const [bookPrice, setBookPrice] = useState()
    const [bookId, setBookId] = useState()
    const [quantity,setQuantity] = useState(1)
    const [day,setDay] = useState()
    const [loder, setLoder] = useState(true);
    let token=localStorage.getItem("token")
    const handleOpen = (category, name, author, image, description,id,price) => {
        setOpen(true);
        setBookCategory(category)
        setBookName(name)
        setBookAuthor(author)
        setBookImage(image)
        setBookDes(description)
        setBookId(id)
        setBookPrice(price)
    };
    const handleClose = () => setOpen(false);

let bookList=async()=>{
    axios.get(`${API_URL}/getbook`)
    .then((response) => {
        setLoder(false);
        setMovies(response.data.message);
    })
    .catch(err=>alert(err.message))
}

    useEffect(() => {
        bookList()
    }, []);



const navigate=useNavigate()
const bookDetails=()=>{
    if(!day){
        alert("Please Select Returning Book Date")
        return;
    }
    let book={
          quantity,bookAuthor,bookId,bookImage,bookPrice,bookName,day
    }
    localStorage.setItem("book",JSON.stringify(book))
navigate("/order_payment")
}

const addToCart=(id)=>{
fetch(`${API_URL}/add/cart/${id}`,{
    method:"PUT",
    headers:{
        "Content-Type":"application/json",
        Accept:"application/json",
        "Authorization":`Bearer ${token}`
    }
}).then(res=>res.json())
.then(data=>{
   
    if(data.status==true){
     alert(data.message)
   
    }else{
     alert(data.message)
    }
 }).catch(err=>alert(err.message))
}


    const renderMovieListCardMode = (data) => {

        return (
            <div className="row">

                {loder ? <>
            <div style={{width:"100%",height:"50vh",textAlign:"center"}}>

              <Loader speed="fast" size="lg" style={{width:"400px"}} />
              <hr />
              </div>
              {/* <Loader speed="normal" content="Normal" />
              <hr />
              <Loader speed="slow" content="Slow" /> */}
            </> : data.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                        <div className="card mb-3">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt="Movie Poster"
                                style={{width:"100%",height:"200px"}}

                            />
                            <div className="card-body">
                                <h5  style={{textDecoration:"none",height:"30px",overflow:"hidden",fontWeight:"bold",fontSize:"14px"}}>{item.name}</h5>
                            </div>
                            <div className="card-footer" style={{ display: "flex" }}>

                                <button
                                    className="btn bg-warning " data-id={item.id}
                                onClick={() => handleOpen(item.category, item.name, item.author, item.image, item.description,item._id,item.price)}
                                
                                >
                                    Datails

                                    {/* on click to show modal */}

                                </button>
                                <button
                                    className="btn  btn-add-favorite"
                                    data-id={item._id}
                                    onClick={() => addToCart(item._id)}
                                >
                                    <i class="fa-solid fa-cart-shopping"></i>

                                </button>
                                {/* <Button >Open modal</Button> */}

                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    hideBackdrop="true"
                                    disableBackdropClick
                                    disableEscapeKeyDown
                                >
                                    {/* <Dialog onClose={handleClose} /> */}
                                    <Box sx={style} >





                                    <MDBCard style={{ maxWidth: '540px' }}>
                                    <div style={{ textAlign: "right", fontSize: "34px", padding: "10px", position: "absolute", top: "0", right: "0", color: "black",cursor:"pointer" }} onClick={handleClose}>x</div>

      <MDBRow className='g-0'>
        <MDBCol md='4'>
          <MDBCardImage src={bookImage} alt='...' fluid />
        </MDBCol>
        <MDBCol md='8'>
          <MDBCardBody>
            <h4 style={{fontWeight:"bold"}}>{bookName}</h4>
            <p>Author : {bookAuthor}</p>
            <p>Description</p>
            <hr/>
            <MDBCardText style={{height:"20vh",overflow:"scroll"}}>
              {bookDes}
            </MDBCardText>
            <MDBCardText>
          <p>Price : {bookPrice} / day</p>
         <select style={{width:"120px"}} value={quantity} onChange={(e)=>setQuantity(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
         </select>
         <input type='date' value={day} onChange={(e)=>setDay(e.target.value)} style={{width:"120px"}} />
         <button className="btn btn-primary" onClick={()=>bookDetails()}>BUY</button>
            </MDBCardText>
          </MDBCardBody>
        </MDBCol>
      </MDBRow>
    </MDBCard>

                                    </Box>
                                </Modal>





                            </div>
                        </div>
                    </div>
                ))
                }
            </div >
        );
    };

    const renderMovieListListMode = (data) => {
        return (
            <ul className="list-group mt-2">
                {data.map((item) => (
                    <li className="list-group-item" key={item.id}>
                        <h5 className="list-title">{item.name}</h5>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-primary btn-show-movie"
                               
                            >
                                More
                            </button>
                            <button
                                className="btn btn-info btn-add-favorite"
                                data-id={item.id}
                                onClick={() => addToFavorite(item.id)}
                            >
                                <i class="fa-solid fa-trash" style={{ color: "#ea2610" }}></i>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        );
    };

    const showMovieModal = (id) => {
        axios.get(INDEX_URL + id)
            .then((response) => {
                const data = response.data.results;
                // Show the movie modal with the data
            })
            .catch((error) => {
               alert(error.message);
            });
    };

    const addToFavorite = (id) => {
        const list = JSON.parse(localStorage.getItem("favoriteMovies")) || [];
        const favoriteMovie = movies.find((movie) => movie.id === id);

        if (!list.some((movie) => movie.id === id) && favoriteMovie) {
            list.push(favoriteMovie);
            localStorage.setItem("favoriteMovies", JSON.stringify(list));
        }
    };

    const getMoviesByPage = (page) => {
        const startIndex = (page - 1) * MOVIES_PER_PAGE;
        const endIndex = startIndex + MOVIES_PER_PAGE;
        return currentSearch === "off" ? movies.slice(startIndex, endIndex) : filteredMovies.slice(startIndex, endIndex);
    };

    const renderPaginator = () => {
        const totalPage = currentSearch === "off" ? Math.ceil(movies.length / MOVIES_PER_PAGE) : Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
        const pages = [];

        for (let i = 1; i <= totalPage; i++) {
            pages.push(
                <li
                    className={`page-item ${currentPage === i ? "active" : ""}`}
                    key={i}
                >
                    <button
                        className="page-link"
                        onClick={() => setCurrentPage(i)}
                    >
                        {i}
                    </button>
                </li>
            );
        }

        return (
            <div aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {pages}
                </ul>
            </div>
        );
    };

    const renderErrorMessage = () => {
        return (
            <div className="alert alert-danger" role="alert">
                Oops! Something went wrong. Please try again later.
            </div>
        );
    };

    const handleControlPanelClicked = () => {
        setCurrentMode(currentMode === "card" ? "list" : "card");
    };

    const handleResetButtonClicked = () => {
        setCurrentSearch("off");
        setCurrentPage(1);
        setKeyword("");
        setFilteredMovies([]);
    };

    const handlePanelClicked = (id) => {
        // Show the movie modal with the selected movie id
    };

    const handleSearchFormSubmitted = (event) => {
        event.preventDefault();

        if (keyword) {
            const results = movies.filter((movie) =>
                movie.name.toLowerCase().includes(keyword.toLowerCase())
            );

            setFilteredMovies(results);
            setCurrentSearch("on");
            setCurrentPage(1);
        } else {
            setFilteredMovies([]);
            setCurrentSearch("off");
            setCurrentPage(1);
        }
    };

    const handlePaginatorClicked = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Slider />
            <div style={{ height: "20vh" }}></div>
            <div className="container">
                {/* <div className="control-panel mb-3">
                <div className="btn-group">
                    <button
                        className={`btn btn-${currentMode === "card" ? "secondary" : "outline-secondary"}`}
                        onClick={handleControlPanelClicked}
                    >
                        Card Mode
                    </button>
                    <button
                        className={`btn btn-${currentMode === "list" ? "secondary" : "outline-secondary"}`}
                        onClick={handleControlPanelClicked}
                    >
                        List Mode
                    </button>
                </div>
                <button className="btn btn-danger btn-reset" onClick={handleResetButtonClicked}>
                    Reset
                </button>
            </div> */}

                <form className="search-form mb-3" onSubmit={handleSearchFormSubmitted}>
                    <div className="input-group">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Search books..."
                            value={keyword}
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                        <button className="btn btn-primary" type="submit">
                            Search
                        </button>
                    </div>
                </form>

                <div className="data-panel">
                    {errorMode ? renderErrorMessage() : (
                        <>
                            {currentMode === "card" ? renderMovieListCardMode(getMoviesByPage(currentPage)) : renderMovieListListMode(getMoviesByPage(currentPage))}
                            {renderPaginator()}
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default StudentHome;


