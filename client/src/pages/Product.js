import React from 'react';
import gate from "./components/imgs/gate-pic.jpg";
import tree2 from "./components/imgs/tree-pic2.jpg";
import basic from "./components/imgs/basic-elegance.jfif";
import party from "./components/imgs/christmas-party.jfif";
import ModalImage from "react-modal-image";
import "./Product.css";

const Product = () => (

        <div className="product">

            <div className="product-desc">
                <p>While we can make just about anything you can imagine, here is a sample of our basic products.</p>
            </div>
            
            <div className="work-feature-block row">
                <div className="columns medium-7">              
                <ModalImage
                    className="work-feature-block-image"
                    small={basic}
                    large={basic}
                    alt="Basic Elegance"
                />
                </div>
                <div className="columns medium-5">
                    <h2 className="work-feature-block-header">Basic Elegance</h2>
                    <p>Red velvet ribbon on artificial evergreen wreath.</p>
                    <ul> Available sizes:
                    <p>Rental / Purchase</p>
                    <li>24" - $27 / $37</li>
                    <li>30" - $48 / 58</li>
                    <li>36" - $58 / $66</li>
                    <li>48" - $79 / $100</li>
                    <li>60" - $110 / $132</li>
                    <li>72" - $123 / $147</li>
                    <li>9' garland - $53 / $63</li>
                    <li>~4' spray - $58 / $69</li>
                    </ul>

                    <p>Red velvet ribbon on lighted, artificial evergreen wreath.</p>
                    <ul> Available sizes:
                    <p>Rental / Purchase</p>
                    <li>24" - $48 / $58</li>
                    <li>30" - $63 / $79</li>
                    <li>36" - $84 / $105</li>
                    <li>48" - $116 / $142</li>
                    <li>60" - $168 / $210</li>
                    <li>72" - $205 / $258</li>
                    <li>9' garland - $74 / $95</li>
                    <li>~4' spray - $84 / $110</li>
                    </ul>
                </div>
            </div>
                <div className="install">
                    <p>Installation available for an additional charge.</p>
                    <h3>Please note that orders placed after October 31st will incur an additional 10% charge.</h3>
                </div>
            <div className="work-feature-block row">

                <div className="columns medium-5">
                    <h2 className="work-feature-block-header">Sliding Gates</h2>
                    <p>If you have a gate that slides, we can "wrap" the gate.  We place bows at either side of the gate and run ribbon through the gate itself.</p>
                    <ul>
                    <li>$65 per gate/installed</li>
                    Additional charge for over-sized gates.
                    </ul>
                </div>            
                <div className="columns medium-7">
                <ModalImage
                    className="work-feature-block-image"
                    small={gate}
                    large={gate}
                    alt="Sliding Gates"
                />
                </div>
            </div>


            <div className="work-feature-block row">
                
                <div className="columns medium-7">
                <ModalImage
                    className="work-feature-block-image"
                    small={tree2}
                    large={tree2}
                    alt="Lighted Trees"
                />
                </div>
                <div className="columns medium-5">
                    <h2 className="work-feature-block-header">Lighted Trees</h2>
                    <p>If you have trees that you would like wrapped with lights, we are on the job! We use a commercial grade, concave, LED bulb. They are super bright with a brown wire that is not as conspicuous on tree trunks. Contact us for pricing.</p>
                </div>
            </div>

            <div className="work-feature-block row">

                <div className="columns medium-5">
                    <h2 className="work-feature-block-header">Christmas Party</h2>
                    <p>Red velvet ribbon on artificial green wreath with shatter-proof ornaments in one or two colors.</p>
                    <ul> Available sizes:
                    <p>Rental / Purchase</p>
                    <li>24" - $48 / $58</li>
                    <li>30" - $84 / 105</li>
                    <li>36" - $95 / $123</li>
                    <li>48" - $132 / $163</li>
                    <li>60" - $168 / $210</li>
                    <li>72" - $200 / $252</li>
                    <li>9' garland - $95 / $123</li>
                    <li>~4' spray - $100 / $126</li>
                    </ul>
                    <p>Red velvet ribbon on lighted, artificial green wreath with shatter-proof ornaments in one or two colors.</p>
                    <ul> Available sizes:
                    <p>Rental / Purchase</p>
                    <li>24" - $53 / $69</li>
                    <li>30" - $111 / 137</li>
                    <li>36" - $132 / $163</li>
                    <li>48" - $179 / $226</li>
                    <li>60" - $231 / $289</li>
                    <li>72" - $284 / $357</li>
                    <li>9' garland - $132 / $163</li>
                    <li>~4' spray - $137 / $168</li>
                    </ul>
                </div>            
                <div className="columns medium-7">
                <ModalImage
                    className="work-feature-block-image"
                    small={party}
                    large={party}
                    alt="Christmas Party"
                />
                </div>
            </div>
                <div className="install">
                    <p>Installation available for an additional charge.</p>
                    <h3>Please note that orders placed after October 31st will incur an additional 10% charge.</h3>
                </div>
                <div id="colorChoice">
                    <h5 id="colorTitle">Colors Available:</h5>
                    <ul>
                        <li className="colorLi" id="red">Red</li>
                        <li className="colorLi" id="palePink">Pale pink</li>
                        <li className="colorLi" id="fuchsia">Fuchsia</li>
                        <li className="colorLi" id="brown">Brown</li>
                        <li className="colorLi" id="gold">Gold</li>
                        <li className="colorLi" id="lightBlue">Light Blue</li>
                        <li className="colorLi" id="royalBlue">Royal blue</li>
                        <li className="colorLi" id="silver">Silver</li>
                        <li className="colorLi" id="lightGreen">Light green</li>
                        <li className="colorLi" id="darkGreen">Dark green</li>
                    </ul>
                </div>
        </div>
);

export default Product;