import React from 'react';
import gate from "./components/imgs/gate-pic.jpg";
import tree2 from "./components/imgs/tree-pic2.jpg";
import basic from "./components/imgs/basic-elegance.jfif";
import party from "./components/imgs/christmas-party.jfif";
import "./Product.css";

const Product = () => (

    <div className="product">
        
        <div class="work-feature-block row">
            <div class="columns medium-7">
                <img class="work-feature-block-image" src={basic}/>
            </div>
            <div class="columns medium-5">
                <h2 class="work-feature-block-header">Basic Elegance</h2>
                <p>Red velvet ribbon on artificial evergreen wreath.</p>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                </ul>
                <p>Red velvet ribbon on lighted, artificial evergreen wreath.</p>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                </ul>
            </div>
        </div>

        <div class="work-feature-block row">

            <div class="columns medium-5">
                <h2 class="work-feature-block-header">Sliding Gates</h2>
                <p>If you have a gate that slides, we can "wrap" the gate.  We place bows at either side of the gate and run ribbon through the gate itself.</p>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                </ul>
            </div>            
            <div class="columns medium-7">
                <img class="work-feature-block-image" src={gate}/>
            </div>
        </div>


        <div class="work-feature-block row">
            
            <div class="columns medium-7">
                <img class="work-feature-block-image" src={tree2}/>
            </div>
            <div class="columns medium-5">
                <h2 class="work-feature-block-header">Lighted Trees</h2>
                <p>If you have trees that you would like wrapped with lights, we are on the job! We use a commercial grade, concave, LED bulb. They are super bright with a brown wire that is not as conspicuous on tree trunks. Contact us for pricing.</p>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                </ul>
            </div>
        </div>

        <div class="work-feature-block row">

            <div class="columns medium-5">
                <h2 class="work-feature-block-header">Christmas Party</h2>
                <p>Red velvet ribbon on artificial green wreath with shatter-proof ornaments in one or two colors.</p>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                </ul>
                <p>Red velvet ribbon on lighted, artificial green wreath with shatter-proof ornaments in one or two colors.</p>
                <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
                <li>Item 4</li>
                </ul>
            </div>            
            <div class="columns medium-7">
                <img class="work-feature-block-image" src={party}/>
            </div>
        </div>

    </div>

);

export default Product;