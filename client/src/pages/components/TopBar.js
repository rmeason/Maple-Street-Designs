import React from 'react';
import "./TopBar.css";

const TopBar = () => (

    <wrapper>
        <div id="emptyDiv">
        </div>
        <div data-sticky-container>
        <div data-sticky data-margin-top='0' data-top-anchor="header:bottom" data-btm-anchor="content:bottom">
            <div class="top-bar topbar-sticky-shrink">
            <div class="top-bar-title">
                <img src="https://placehold.it/150x38" alt="" />
            </div>
            <div class="top-bar-right">
                <ul class="menu">
                <li><a href="#">Thing 1</a></li>
                <li><a href="#">Thing 2</a></li>
                <li><a href="#">Thing 3</a></li>
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
