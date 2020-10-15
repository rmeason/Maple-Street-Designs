import React from 'react';
import "./Home.css";

const Home = () => (

    <div class="about-the-author">
        <h1 class="author-title">Maple Street Designs</h1>
        <div class="row">
            <div class="small-12 medium-4 columns">
            <div class="author-image">
                
            </div>
            <div class="author-social">
                <a href="#">
                <span class="fa-stack fa-lg facebook">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
                </a>
                <a href="#">
                <span class="fa-stack fa-lg twitter">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
                </a>
                <a href="#">
                <span class="fa-stack fa-lg linkedin">
                    <i class="fa fa-circle fa-stack-2x"></i>
                    <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
                </a>
            </div>
            </div>
            <div class="small-12 medium-8 columns">
            <h4 class="separator-left">About Us</h4>
                <p>Maple Street Designs, LLC specializes in meeting the decorating needs of  property management companies as well as small business owners.
                We offer both ready-made and custom designs for rent or purchase for Christmas and other holidays and special occasions.  
                We are committed to customer service and satisfaction.  Call today to see what we can do for you. 
                </p>
                <p class="thanks">
                Thanks for visiting!
                <br />
                Julie
                </p>
            </div>
        </div>
    </div>

);

export default Home;