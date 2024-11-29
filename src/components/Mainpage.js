import React from "react";
// import Navbar from "./Navbar";
import './Mainpage.css';

function MainPage() {
    return (
        <div className="main-page">
            {/* <Navbar /> */}
            <div className="textual">
                <div className="content">
                    <p>Simple - Unique - Friendly</p>
                    <h1>Make Yourself At Home<br />
                        In Our <span className="highlight">Guest House</span>.
                    </h1>
                </div>
            </div>
            <div className="rectangle-container">
                <div className="rectangle-box">
                    <button className="book-now">Book Now</button>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
