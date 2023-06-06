import React, { useState, useEffect } from "react";
import axios from "axios";
import './home.css'
import StudentHeading from "./StudentHeading";
import Slider from "./Slider";
const BASE_URL = "https://movie-list.alphacamp.io";
const INDEX_URL = BASE_URL + "/api/v1/movies/";
const POSTER_URL = BASE_URL + "/posters/";
const MOVIES_PER_PAGE = 12;

const StudentHome = () => {
    const [movies, setMovies] = useState([]);
    const [filteredMovies, setFilteredMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentMode, setCurrentMode] = useState("card");
    const [currentSearch, setCurrentSearch] = useState("off");
    const [errorMode, setErrorMode] = useState(false);
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        axios.get(INDEX_URL)
            .then((response) => {
                setMovies(response.data.results);
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
                                src={POSTER_URL + item.image}
                                className="card-img-top"
                                alt="Movie Poster"
                            />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                            </div>
                            <div className="card-footer" style={{ display: "flex" }}>
                                <button
                                    type="button"
                                    className="btn btn-primary btn-show-movie"
                                    data-bs-toggle="modal"
                                    data-bs-target="#movie-modal"
                                    data-id={item.id}
                                    onClick={() => showMovieModal(item.id)}
                                >
                                    More
                                </button>
                                <button
                                    className="btn btn-info btn-add-favorite"
                                    data-id={item.id}
                                    onClick={() => addToFavorite(item.id)}
                                >
                                    +
                                </button>
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
                        <h5 className="list-title">{item.title}</h5>
                        <div className="">
                            <button
                                type="button"
                                className="btn btn-primary btn-show-movie"
                                data-bs-toggle="modal"
                                data-bs-target="#movie-modal"
                                data-id={item.id}
                                onClick={() => showMovieModal(item.id)}
                            >
                                More
                            </button>
                            <button
                                className="btn btn-info btn-add-favorite"
                                data-id={item.id}
                                onClick={() => addToFavorite(item.id)}
                            >
                                +
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

export default StudentHome;
