import React from 'react'

export default function Footer() {
    return (
        <>
            <div class=" my-5" style={{ width: "100%", background: "red" }}>

                <footer class="text-center text-white" style={{ backgroundColor: "#f1f1f1", width: "100%" }}>
                    <div class="container pt-4" style={{ width: "100%" }}>
                        <section class="mb-4">
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-2"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-facebook-f" style={{marginTop:"10px"}}></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-2"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-twitter" style={{marginTop:"10px"}}></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-2"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-google" style={{marginTop:"10px"}}></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-2"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-instagram" style={{marginTop:"10px"}}></i
                            ></a>

                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-2"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-linkedin" style={{marginTop:"10px"}}></i
                            ></a>
                            <a
                                class="btn btn-link btn-floating btn-lg text-dark m-2"
                                href="#!"
                                role="button"
                                data-mdb-ripple-color="dark"
                                style={{ borderRadius: "50%", width: "50px", height: "50px" }}
                            ><i class="fab fa-github" style={{marginTop:"10px"}}></i>
                            </a>
                        </section>
                    </div>

                    <div class="text-center text-dark p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                        © 2023  Copyright :
                        <a class="text-dark" href="https://kishordeveloper.com/">Kishor <i class="fa-solid fa-heart fa-flip" style={{ color: "#dd0808" }}> </i> Itishree</a>
                    </div>
                </footer>

            </div>
        </>
    )
}
