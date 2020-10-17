import React from 'react';
import "./Footer.css";

const Footer = () => (

    <footer class="marketing-site-footer">
        <div class="row medium-unstack">
            <div class="medium-4 columns">
            <h4 class="marketing-site-footer-name">Yeti Snowcone</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita dolorem accusantium architecto id quidem, itaque nesciunt quam ducimus atque.</p>
            <ul class="menu marketing-site-footer-menu-social simple">
                <li><a href="#"><i class="fa fa-youtube-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-facebook-square" aria-hidden="true"></i></a></li>
                <li><a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a></li>
            </ul>
            </div>
            <div class="medium-4 columns">
            <h4 class="marketing-site-footer-title">Contact Info</h4>
            <div class="marketing-site-footer-block">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
                <p>100 W Rincon<br />San Francisco, CA 94015</p>
            </div>
            <div class="marketing-site-footer-block">
                <i class="fa fa-phone" aria-hidden="true"></i>
                <p>713-562-5239</p>
            </div>
            <div class="marketing-site-footer-block">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
                <p>julie@maplestreetdesigns.com</p>
            </div>
            </div>
            <div class="medium-4 columns">
            <h4 class="marketing-site-footer-title">Instagram</h4>
            <div class="row small-up-3">
                <div class="column column-block">
                <img src="https://placehold.it/75" alt="" />
                </div>
                <div class="column column-block">
                <img src="https://placehold.it/75" alt="" />
                </div>
                <div class="column column-block">
                <img src="https://placehold.it/75" alt="" />
                </div>
                <div class="column column-block">
                <img src="https://placehold.it/75" alt="" />
                </div>
                <div class="column column-block">
                <img src="https://placehold.it/75" alt="" />
                </div>
                <div class="column column-block">
                <img src="https://placehold.it/75" alt="" />
                </div>
            </div>
            </div>
        </div>
        <div class="marketing-site-footer-bottom">
            <div class="copyright">
                <p>&copy; 2020. Maple Street Designs, LLC. All rights reserved.</p>
            </div>
        </div>
    </footer>

);

export default Footer;
