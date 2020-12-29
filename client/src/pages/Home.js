import React from 'react';
import aboutPic from "./components/imgs/MSD-homepage.jpg";
import "./Home.css";

const Home = () => (

    <div className="about-the-author">
        <h1 className="author-title">About Us</h1>
        <div className="row">
            <div className="small-12 medium-4 columns" id="aboutUsPic">
            <div className="author-image">
                <img alt="aboutPic" src={aboutPic} />
            </div>
            </div>
            <div className="small-12 medium-8 columns" id="abtUs">
            <h4 className="separator-left"></h4>
                <p>Maple Street Designs, LLC specializes in meeting the decorating needs of  property management companies as well as small business owners.
                We offer both ready-made and custom designs for rent or purchase for Christmas and other holidays and special occasions.  
                We are committed to customer service and satisfaction.  Call today to see what we can do for you. 
                </p>
                <p className="thanks">
                Thanks for visiting!
                <br />
                Julie
                </p>
            </div>
        </div>
    </div>

);

export default Home;