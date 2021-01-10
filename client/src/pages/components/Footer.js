import React from 'react';
import insta1 from "./imgs/insta-img-1.jpg";
import insta2 from "./imgs/insta-img-2.jpg";
import insta3 from "./imgs/insta-img-3.jpg";
import "./Footer.css";

const Footer = () => (

    <footer className="marketing-site-footer">
        <div className="row medium-unstack">
            {/* <div class="medium-4 columns">
            <h4 class="marketing-site-footer-name">Yeti Snowcone</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
            <ul class="menu marketing-site-footer-menu-social simple">
                <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
            </ul>
            </div> */}
            <div className="medium-4 columns footer-sections" id="cont">
            <h4 id="contact" className="marketing-site-footer-title">Contact Info:</h4>
            {/* <div class="marketing-site-footer-block">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>100 W Rincon<br />San Francisco, CA 94015</p>
            </div> */}
                <a href="tel:713-562-5239" className="contact">
                    <div className="marketing-site-footer-block">
                        <i className="fa fa-phone" aria-hidden="true"></i>
                        <p>713-562-5239</p> 
                    </div>
                </a>
                <a href="mailto: julie@maplestreetdesigns.com" className="contact" target="_blank" rel="noopener noreferrer">
                    <div className="marketing-site-footer-block">
                        <i className="fa fa-envelope-o" aria-hidden="true"></i>
                        <p>julie@maplestreetdesigns.com</p>
                    </div>
                </a>
            </div>
            <div className="medium-4 columns footer-sections" id="insta">
            <h4 className="marketing-site-footer-title">Instagram : 
            &nbsp;
                <a href="https://www.instagram.com/Maple_Street_designs/" aria-label="Insta" rel="noopener" target="_blank">
                    <span className="fa-stack fa-sm instagram">
                        <i className="fa fa-circle fa-stack-2x"></i>
                        <i className="fa fa-instagram fa-stack-1x fa-inverse"></i>
                    </span>
                </a>
            </h4>
            <div className="row small-up-3">
                <div className="column column-block instaBlock">
                <img className="instaPic" src={insta1} alt="insta1" />
                </div>
                <div className="column column-block instaBlock">
                <img className="instaPic" src={insta2} alt="insta2" />
                </div>
                <div className="column column-block instaBlock">
                <img className="instaPic" src={insta3} alt="insta3" />
                </div>
            </div>
            </div>
        </div>
        <div className="marketing-site-footer-bottom">
            <div className="copyright">
                <p>&copy; 2020. Maple Street Designs, LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>

);

export default Footer;
