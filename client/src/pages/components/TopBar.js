import React, { Component } from 'react';
// import Wrapper from "./GalleryWrapper";
import RedBow from "./imgs/RealRedBow.png";
import "./TopBar.css";

const TopBar = () => (

    <wrapper>
        <div id="emptyDiv">
        </div>
        <div data-sticky-container id="TopTb">
            <div data-sticky data-margin-top='0' 
            data-top-anchor="header:bottom" 
            data-btm-anchor="content:bottom">
                <div className="top-bar topbar-sticky-shrink">
                    <div className="top-bar-title">
                        <img id="bow" src={RedBow} alt="redBow" />
                    </div>
                    <div className="top-bar-center">
                        <ul className="menu">
                        <li><a className="page" href="/">Home</a></li>
                        <li><a className="page" href="/gallery">Gallery</a></li>
                        <li><a className="page" href="#contact">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <br />
        
        <header id="header" className="topbar-sticky-shrink-header">
            <h1 id="head" >Maple Street Designs</h1>
        </header>
    </wrapper>

);
export default TopBar;
