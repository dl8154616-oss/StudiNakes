import React from "react";

export default function HomeNavbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item mx-2">
                            <a className="nav-link" aria-current="page" href="#home">Home</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#livecourse">Live Course</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#bimbel">Bimbel</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#tryout">Tryout</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#blog">Blog</a>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link" href="#buku">Buku</a>
                        </li>
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="btn btn-primary rounded-pill px-4" href="#joinus">Join Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}