import React from 'react';
import gate from "./components/imgs/gate-pic4.jpg";
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
                    <p>24" - $27 / $37</p>
                    <p>30" - $48 / 58</p>
                    <p>36" - $58 / $66</p>
                    <p>48" - $79 / $100</p>
                    <p>60" - $110 / $132</p>
                    <p>72" - $123 / $147</p>
                    <p>9' garland - $53 / $63</p>
                    <p>~4' spray - $58 / $69</p>
                    </ul>

                    <p>Red velvet ribbon on lighted, artificial evergreen wreath.</p>
                    <ul> Available sizes:
                    <p>Rental / Purchase</p>
                    <p>24" - $48 / $58</p>
                    <p>30" - $63 / $79</p>
                    <p>36" - $84 / $105</p>
                    <p>48" - $116 / $142</p>
                    <p>60" - $168 / $210</p>
                    <p>72" - $205 / $258</p>
                    <p>9' garland - $74 / $95</p>
                    <p>~4' spray - $84 / $110</p>
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
                    <p>$65 per gate/installed</p>
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
                    <p>24" - $48 / $58</p>
                    <p>30" - $84 / 105</p>
                    <p>36" - $95 / $123</p>
                    <p>48" - $132 / $163</p>
                    <p>60" - $168 / $210</p>
                    <p>72" - $200 / $252</p>
                    <p>9' garland - $95 / $123</p>
                    <p>~4' spray - $100 / $126</p>
                    </ul>
                    <p>Red velvet ribbon on lighted, artificial green wreath with shatter-proof ornaments in one or two colors.</p>
                    <ul> Available sizes:
                    <p>Rental / Purchase</p>
                    <p>24" - $53 / $69</p>
                    <p>30" - $111 / 137</p>
                    <p>36" - $132 / $163</p>
                    <p>48" - $179 / $226</p>
                    <p>60" - $231 / $289</p>
                    <p>72" - $284 / $357</p>
                    <p>9' garland - $132 / $163</p>
                    <p>~4' spray - $137 / $168</p>
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
                        <p className="colorLi" id="red">Red</p>
                        <p className="colorLi" id="palePink">Pale pink</p>
                        <p className="colorLi" id="fuchsia">Fuchsia</p>
                        <p className="colorLi" id="brown">Brown</p>
                        <p className="colorLi" id="gold">Gold</p>
                        <p className="colorLi" id="lightBlue">Light Blue</p>
                        <p className="colorLi" id="royalBlue">Royal blue</p>
                        <p className="colorLi" id="silver">Silver</p>
                        <p className="colorLi" id="lightGreen">Light green</p>
                        <p className="colorLi" id="darkGreen">Dark green</p>
                    </ul>
                </div>
        </div>
);

export default Product;