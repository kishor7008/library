import React, { useState, useEffect } from "react";
import axios from "axios";
import "../students/home.css";
import Slider from "../students/Slider";
import Box from "@mui/material/Box";
import { Dialog } from "@mui/material";
import TextField from "@mui/material/TextField";
import "./employeeModal.css";
import { Loader } from "rsuite";

import Button from "@mui/material/Button";
import { API_URL } from "../../App";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
const BASE_URL = "https://movie-list.alphacamp.io";
const INDEX_URL = BASE_URL + "/api/v1/movies/";
const POSTER_URL = BASE_URL + "/posters/";
const MOVIES_PER_PAGE = 12;

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  // width: 400,
  // bgcolor:"background.paper"
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

  const [bookName, setBookName] = useState();
  const [bookCategory, setBookCategory] = useState();
  const [bookAuthor, setBookAuthor] = useState();
  const [bookImage, setBookImage] = useState();
  const [bookDes, setBookDes] = useState();
  const [bookId, setBookId] = useState();
  const [loder, setLoder] = useState(true);

  const handleOpen = (category, name, author, image, description, id) => {
    setOpen(true);
    setBookCategory(category);
    setBookName(name);
    setBookAuthor(author);
    setBookImage(image);
    setBookDes(description);
    setBookId(id);
    console.log(
      category,
      name,
      image,
      description,
      author,
      id,
      "line 34r5jweiugfy3e7tfuy c1b7623egdi6---------------------------------------------------------------------------------------"
    );
  };
  const handleClose = () => setOpen(false);

  let bookList = async () => {
    axios
      .get(`${API_URL}/getbook`)
      .then((response) => {
        setLoder(false)
        setMovies(response.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    bookList();
  }, []);

  const editbook = (e, id) => {
    e.preventDefault();
    fetch(`${API_URL}/edit/book/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        category: bookCategory,
        name: bookName,
        author: bookAuthor,
        image: bookImage,
        description: bookDes,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          bookList();
          alert(data.message);
          handleClose();
        } else {
          alert(data.message);
        }
      });
    return false;
  };

  const deleteBook = (id) => {
    fetch(`${API_URL}/delete/book/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status == true) {
          bookList();
          alert(data.message);
          handleClose();
        } else {
          alert(data.message);
        }
      });
  };

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
            </>:data.map((item) => (
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
                  className="btn bg-warning "
                  data-id={item.id}
                  onClick={() =>
                    handleOpen(
                      item.category,
                      item.name,
                      item.author,
                      item.image,
                      item.description,
                      item._id
                    )
                  }
                >
                  Datails
                  {/* on click to show modal */}
                </button>
                <button
                  className="btn bg-dark btn-add-favorite"
                  data-id={item._id}
                  onClick={() => deleteBook(item._id)}
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
                  disableEscapeKeyDown
                >
                  {/* <Dialog onClose={handleClose} /> */}
                  <Box sx={style}>
                    <div class=" mx-auto">
                      <div class="card mt-2 mx-auto p-4 bg-light">
                        <div
                          style={{
                            textAlign: "right",
                            fontSize: "34px",
                            padding: "10px",
                            position: "absolute",
                            top: "0",
                            right: "0",
                            color: "black",
                            cursor: "pointer",
                          }}
                          onClick={handleClose}
                        >
                          x
                        </div>
                        <br />
                        <div class="card-body bg-light">
                          <div class="container">
                            <form id="contact-form" role="form">
                              <div class="controls">
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="form_name">
                                        Book Category *
                                      </label>
                                      {/* <input id="form_name" type="text" name="name" class="form-control" placeholder="Please enter your firstname *" required="required" data-error="Firstname is required." value={bookCategory} onChange={(e) => setBookCategory(e.target.value)} /> */}
                                      <select
                                        onChange={(e) =>
                                          setBookCategory(e.target.value)
                                        }
                                      >
                                        <option
                                          value="Literary Fiction"
                                          selected={
                                            bookCategory == "Literary Fiction"
                                              ? true
                                              : false
                                          }
                                        >
                                          Literary Fiction
                                        </option>
                                        <option
                                          value="Classics"
                                          selected={
                                            bookCategory == "Classics"
                                              ? true
                                              : false
                                          }
                                        >
                                          Classics
                                        </option>

                                        <option
                                          value="History"
                                          selected={
                                            bookCategory == "History"
                                              ? true
                                              : false
                                          }
                                        >
                                          History
                                        </option>
                                        <option
                                          value="Religion and Mythology"
                                          selected={
                                            bookCategory ==
                                            "Religion and Mythology"
                                              ? true
                                              : false
                                          }
                                        >
                                          Religion and Mythology
                                        </option>
                                        <option
                                          value="Historical Fiction"
                                          selected={
                                            bookCategory == "Historical Fiction"
                                              ? true
                                              : false
                                          }
                                        >
                                          Historical Fiction
                                        </option>
                                        <option
                                          value="Mythological Fiction"
                                          selected={
                                            bookCategory ==
                                            "Mythological Fiction Fiction"
                                              ? true
                                              : false
                                          }
                                        >
                                          Mythological Fiction
                                        </option>
                                        <option
                                          value="Thriller and Mystery"
                                          selected={
                                            bookCategory ==
                                            "Thriller and Mystery"
                                              ? true
                                              : false
                                          }
                                        >
                                          Thriller and Mystery
                                        </option>
                                        <option
                                          value="Sci-Fi and Fantasy"
                                          selected={
                                            bookCategory == "ci-Fi and Fantasy"
                                              ? true
                                              : false
                                          }
                                        >
                                          Sci-Fi and Fantasy
                                        </option>
                                        <option
                                          value="Humour"
                                          selected={
                                            bookCategory == "Humour"
                                              ? true
                                              : false
                                          }
                                        >
                                          Humour
                                        </option>
                                        <option
                                          value="Chick-lit"
                                          selected={
                                            bookCategory == "Chick-lit"
                                              ? true
                                              : false
                                          }
                                        >
                                          Chick-lit
                                        </option>
                                        <option
                                          value="Biography and Memoir"
                                          selected={
                                            bookCategory ==
                                            "Biography and Memoir"
                                              ? true
                                              : false
                                          }
                                        >
                                          Biography and Memoir
                                        </option>
                                        <option
                                          value="Self-Help"
                                          selected={
                                            bookCategory == "Self-Help"
                                              ? true
                                              : false
                                          }
                                        >
                                          Self-Help
                                        </option>
                                        <option
                                          value="Travel and Places"
                                          selected={
                                            bookCategory == "Travel and Places"
                                              ? true
                                              : false
                                          }
                                        >
                                          Travel and Places
                                        </option>
                                      </select>
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="form_lastname">
                                        Book Name *
                                      </label>
                                      <input
                                        id="form_lastname"
                                        type="text"
                                        name="surname"
                                        class="form-control"
                                        placeholder="Please enter your lastname *"
                                        required="required"
                                        data-error="Lastname is required."
                                        value={bookName}
                                        onChange={(e) =>
                                          setBookName(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="form_email">Author *</label>
                                      <br />
                                      <input
                                        id="form_email"
                                        type="text"
                                        name="email"
                                        class="form-control"
                                        placeholder="Please enter your email *"
                                        required="required"
                                        data-error="Valid email is required."
                                        value={bookAuthor}
                                        onChange={(e) =>
                                          setBookAuthor(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div class="col-md-6">
                                    <div class="form-group">
                                      <label for="form_email">
                                        Image URL *
                                      </label>
                                      <input
                                        id="form_email"
                                        type="text"
                                        name="email"
                                        class="form-control"
                                        placeholder="Please enter your email *"
                                        required="required"
                                        data-error="Valid email is required."
                                        value={bookImage}
                                        onChange={(e) =>
                                          setBookImage(e.target.value)
                                        }
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div class="row">
                                  <div class="col-md-12">
                                    <div class="form-group">
                                      <label for="form_message">
                                        Description *
                                      </label>
                                      <textarea
                                        id="form_message"
                                        name="message"
                                        class="form-control"
                                        placeholder="Write your message here."
                                        required="required"
                                        data-error="Please, leave us a message."
                                        value={bookDes}
                                        onChange={(e) =>
                                          setBookDes(e.target.value)
                                        }
                                        style={{
                                          width: "100%",
                                          height: "20vh",
                                        }}
                                      ></textarea>
                                    </div>
                                  </div>

                                  <div class="col-md-12">
                                    <input
                                      type="submit"
                                      class="btn btn-success btn-send  pt-2 btn-block
                                                                       "
                                      value="Save"
                                      onClick={(e) => editbook(e, item._id)}
                                    />
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
    axios
      .get(INDEX_URL + id)
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
    return currentSearch === "off"
      ? movies.slice(startIndex, endIndex)
      : filteredMovies.slice(startIndex, endIndex);
  };

  const renderPaginator = () => {
    const totalPage =
      currentSearch === "off"
        ? Math.ceil(movies.length / MOVIES_PER_PAGE)
        : Math.ceil(filteredMovies.length / MOVIES_PER_PAGE);
    const pages = [];

    for (let i = 1; i <= totalPage; i++) {
      pages.push(
        <li
          className={`page-item ${currentPage === i ? "active" : ""}`}
          key={i}
        >
          <button className="page-link" onClick={() => setCurrentPage(i)}>
            {i}
          </button>
        </li>
      );
    }

    return (
      <div aria-label="Page navigation">
        <ul className="pagination justify-content-center">{pages}</ul>
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
      {/* <Slider /> */}
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
          {errorMode ? (
            renderErrorMessage()
          ) : (
            <>
              {currentMode === "card"
                ? renderMovieListCardMode(getMoviesByPage(currentPage))
                : renderMovieListListMode(getMoviesByPage(currentPage))}
              {renderPaginator()}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default EmployeeHomeCart;
