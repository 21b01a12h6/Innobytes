import React from "react";
import './Navbar.css';
// import { Link } from "react-router-dom";

function Navbar() {

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <h1>Kingsukh<br />Guest House</h1>
            </div>
            <ul className="nav-links">
                {/* <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#rooms">Rooms</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#contact">Contact</a></li> */}


                <li onClick={() => scrollToSection('home')}>Home</li>
                <li onClick={() => scrollToSection('about')}>About</li>
                <li onClick={() => scrollToSection('services')}>Services</li>
                <li onClick={() => scrollToSection('rooms')}>Rooms</li>
                <li onClick={() => scrollToSection('gallery')}>Gallery</li>
                <li onClick={() => scrollToSection('contact')}>Contact</li>



            </ul>
            <div className="navbar-button">
                <button>Book Now</button>
            </div>
        </nav>
    );
}

export default Navbar;
