import React from 'react'

export default function Footer() {
    return (
        <>
            <div class=" my-5" style={{ width: "100%", background: "red" }}>

                <footer class="text-center text-white" style={{ backgroundColor: "#f1f1f1", width: "100%" }}>
                    <div class="container pt-4" style={{ width: "100%" }}>
                        <section class="mb-4">
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-facebook-f"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-twitter"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-google"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-instagram"></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-linkedin"></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-1"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-github"></i
                            ></a>
                        </section>
                    </div>

                    <div class="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2020 Copyright:
                        <a class="text-dark" href="https://kishordeveloper.com/">kishordeveloper</a>
                    </div>
                </footer>

            </div>
        </>
    )
}
