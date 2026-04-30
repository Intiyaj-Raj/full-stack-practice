import React from 'react'
import img1 from '../assets/1.jpg'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpeg'
const Hero = () => {
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide ">
            <div className="carousel-indicators ">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="10000">
                    <img src={img1} alt="..." style={{
                        objectFit: "cover",
                        height: "90vh",
                        width: "100%"
                    }} />
                    <div class="carousel-caption d-none d-md-block text-warning">
                        <h1 class="fw-bolder">Welcome to Code of School</h1>
                        <p class="fw-bold">We help you in all type of coding</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                    <img src={img2} alt="..." style={{
                        objectFit: "cover",
                        height: "90vh",
                        width: "100%"
                    }} />
                    <div class="carousel-caption d-none d-md-block text-light">
                        <h1 class="fw-bolder">Learn Web Development</h1>
                        <p class="fw-bold">Build modern websites using HTML, CSS, and JavaScript</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="..." style={{
                        objectFit: "cover",
                        height: "90vh",
                        width: "100%"
                    }} />
                    <div class="carousel-caption d-none d-md-block text-info">
                        <h1 class="fw-bolder">Start Your Coding Journey</h1>
                        <p class="fw-bold">Practice, learn, and become a skilled developer</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon bg-danger" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon bg-danger" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

export default Hero