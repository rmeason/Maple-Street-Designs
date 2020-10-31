import React from 'react';
import RedBow from "./imgs/RedBow.png";
import "./TopBar.css";

const TopBar = () => (

    <wrapper>
        <div id="emptyDiv">
        </div>
        <div data-sticky-container>
        <div data-sticky data-margin-top='0' 
        data-top-anchor="header:bottom" 
        data-btm-anchor="content:bottom">
            <div class="top-bar topbar-sticky-shrink">
            <div class="top-bar-title">
                <img id="bow" src={RedBow} alt="redBow" />
            </div>
            <div class="top-bar-center">
                <ul class="menu">
                <li><a class="page" href="/">Home</a></li>
                <li><a class="page" href="/products">Gallery</a></li>
                <li><a class="page" href="#contact">Contact</a></li>
                </ul>
            </div>
            </div>
        </div>
        </div>

        <br />
        
        <header id="header" class="topbar-sticky-shrink-header">
            <h1>MAPLE STREET DESIGNS</h1>
        </header>
    </wrapper>

);
export default TopBar;
