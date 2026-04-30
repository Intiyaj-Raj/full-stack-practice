import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/cos-white-logo.webp'
const Navbar = () => {
    return (
        <header className="p-3 bg-dark shadow">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-between">


                    <Link to="https://codeofschool.com/" className="text-white text-decoration-none fs-4 fw-bold">
                        <img
                            src={logo}
                            alt="logo"
                            style={{
                                width: "50px",
                                height: "50px",
                                objectFit: "cover"
                            }}
                        />
                    </Link>


                    <ul className="nav">
                        <li><Link to="/" className="nav-link px-3 text-white">Home</Link></li>

                        <li><Link to="/services" className="nav-link px-3 text-white">Services</Link></li>

                        <li><Link to="/courses" className="nav-link px-3 text-white">Courses</Link></li>

                        <li><Link to="/contact" className="nav-link px-3 text-white">Contact</Link></li>
                    </ul>

                    <div className="d-flex align-items-center gap-3">

                        <input
                            type="search"
                            className="form-control form-control-dark"
                            placeholder="Search..."
                            style={{ maxWidth: "200px" }}
                        />

                        <button className="btn btn-outline-light">Login</button>
                        <button className="btn btn-warning fw-semibold">Sign-up</button>

                    </div>

                </div>
            </div>
        </header>
    );
};

export default Navbar;