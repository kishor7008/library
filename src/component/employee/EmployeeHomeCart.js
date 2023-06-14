import React, { useState, useEffect } from "react";
import axios from "axios";
import '../students/home.css'
import Slider from "../students/Slider";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './employeeModal.css'
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
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

    // boxShadow: 24,

};
const EmployeeHomeCart = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentMode, setCurrentMode] = useState("card");
    const [currentSearch, setCurrentSearch] = useState("off");
    const [errorMode, setErrorMode] = useState(false);
    const [keyword, setKeyword] = useState("");
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => { setOpen(true); console.log("jgvg ghvhnghnvh") };
    const handleClose = () => setOpen(false);
    useEffect(() => {
        axios.get("https://book-admin.onrender.com/getBook")
            .then((response) => {
                setMovies(response.data.message);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const renderMovieListCardMode = (data) => {

        return (
            <div className="row">
                {data.map((item) => (
                    <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={item.id}>
                        <div className="card mb-3">
                            <img
                                src={item.image}
                                className="card-img-top"
                                alt="Movie Poster"

                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.name}</h5>
                            </div>
                            <div className="card-footer" style={{ display: "flex" }}>

                                <button
                                    className="btn bg-warning " data-id={item.id}
                                    onClick={() => console.log("hk")}
                                >
                                    Datails









                                    {/* on click to show modal */}



                                </button>
                                <button
                                    className="btn bg-dark btn-add-favorite"
                                    data-id={item.id}
                                    onClick={handleOpen}
                                >
                                    <i class="fa-solid fa-trash" style={{ color: "#ea2610" }}></i>

                                </button>
                                {/* <Button >Open modal</Button> */}


                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                    hideBackdrop="true"
                                    disableBackdropClick
                                >
                                    <Box sx={style} >





                                        <div class=" mx-auto">
                                            <div class="card mt-2 mx-auto p-4 bg-light">
                                                <div class="card-body bg-light">

                                                    <div class="container">
                                                        <form id="contact-form" role="form">



                                                            <div class="controls">

                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div class="form-group">
                                                                            <label for="form_name">Book Category *</label>
                                                                            <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." />

                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-group">
                                                                            <label for="form_lastname">Book Name *</label>
                                                                            <input id="form_lastname" type="text" name="surname" class="form-control" placeholder="Please enter your lastname *" required="required" data-error="Lastname is required." />
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div class="form-group">
                                                                            <label for="form_email">Image URL *</label>
                                                                            <input id="form_email" type="text" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />

                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                        <div class="form-group">
                                                                            <label for="form_need">Please specify your need *</label>
                                                                            <select id="form_need" name="need" class="form-control selectText" required="required" data-error="Please specify your need." style={{ width: "250px", height: "5.5vh" }}>
                                                                                <option value="" selected disabled style={{ fontSize: "14px", fontWeight: "bold" }}>--Select Your Issue--</option>
                                                                                <option style={{ fontSize: "14px", fontWeight: "bold" }}>Request Invoice for order</option>
                                                                                <option style={{ fontSize: "14px", fontWeight: "bold" }}>Request order status</option>
                                                                                <option style={{ fontSize: "14px", fontWeight: "bold" }}>Haven't received cashback yet</option>
                                                                                <option style={{ fontSize: "14px", fontWeight: "bold" }}>Other</option>
                                                                            </select>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="row">
                                                                    <div class="col-md-6">
                                                                        <div class="form-group">
                                                                            <label for="form_email">Author *</label><br />
                                                                            <input id="form_email" type="text" name="email" class="form-control" placeholder="Please enter your email *" required="required" data-error="Valid email is required." />

                                                                        </div>
                                                                    </div>
                                                                    <div class="col-md-6">

                                                                        <div class="form-group">
                                                                            <label for="form_message">Description *</label>
                                                                            <textarea id="form_message" name="message" class="form-control" placeholder="Write your message here." required="required" data-error="Please, leave us a message."></textarea
                                                                            >
                                                                        </div>

                                                                    </div>


                                                                    <div class="col-md-12">

                                                                        <input type="submit" class="btn btn-success btn-send  pt-2 btn-block
                                                                       " value="Send Message" />

                                                                    </div>

                                                                </div>


                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>


                                            </div>

                                        </div>




                                    </Box>
                                </Modal>





                            </div>
                        </div>
                    </div>
                ))}
            </div>
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
                                // data-bs-toggle="modal"
                                // data-bs-target="#movie-modal"
                                // data-id={item.id}
                                onClick={() => console.log("2d2")}
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
                console.log(error);
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
            <nav aria-label="Page navigation">
                <ul className="pagination justify-content-center">
                    {pages}
                </ul>
            </nav>
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
                movie.title.toLowerCase().includes(keyword.toLowerCase())
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

export default EmployeeHomeCart;


