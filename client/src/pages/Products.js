import React from 'react';
import gate from "./components/imgs/gate-pic.jpg";
import gate2 from "./components/imgs/gate-pic2.jpg";
import gate3 from "./components/imgs/gate-pic3.jpg";
import gate4 from "./components/imgs/gate-pic4.jpg";
import sign from "./components/imgs/sign-pic.jpg";
import sign2 from "./components/imgs/sign-pic2.jpg";
import sign3 from "./components/imgs/sign-pic3.jpg";
import sign4 from "./components/imgs/sign-pic4.jpg";
import tree from "./components/imgs/tree-pic.jpg";
import tree2 from "./components/imgs/tree-pic2.jpg";
import tree3 from "./components/imgs/tree-pic3.jpg";
import tree4 from "./components/imgs/tree-pic4.jpg";
import ProductsWrapper from "./components/ProductsWrapper";
import "./Products.css";
import $ from 'jquery';

function Products() {

      $('.sim-thumb').on('click', function() {
        $('#main-product-image').attr('src', $(this).data('image')); 
      })

    return (

        <ProductsWrapper>

                <section class="four-up-feature wrap">
                    <div class="row four-up-feature-header align-center">


                        <div class="medium-8 columns">
                        <h2 class="product-head">While we can make just about anything you can imagine, here is a sample of our basic products.</h2>
                        </div>
                    </div>
                    {/* <div class="row align-spaced">
                    <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src={gate}/></a>
                        </div>
                        <h2 class="product-card-title"><a class="product" href="#">Sliding Gates</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">$65 per gate/installed</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                        <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src={sign}/></a>
                        </div>
                        <h2 class="product-card-title"><a class="product" href="#">Community Signage</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">Contact us for pricing.</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                        <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src={tree}/></a>
                        </div>
                        <h2 class="product-card-title"><a class="product" href="#">Lighted Trees</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">Contact us for pricing.</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                    </div> */}



                    <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src={gate} alt="gate" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image={gate2}><img src={gate2} alt="gate2" /></a> </li>
                                <li> <a class="sim-thumb" data-image={gate3}><img src={gate3} alt="gate3" /></a> </li>
                                <li> <a class="sim-thumb" data-image={gate4}><img src={gate4} alt="gate4" /></a> </li>
                            </ul>
                        </div>




                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src={sign} alt="sign" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image={sign2}><img src={sign2} alt="sign2" /></a> </li>
                                <li> <a class="sim-thumb" data-image={sign3}><img src={sign3} alt="sign3" /></a> </li>
                                <li> <a class="sim-thumb" data-image={sign4}><img src={sign4} alt="sign4" /></a> </li>
                            </ul>
                        </div>




                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src={tree} alt="tree" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image={tree2}><img src={tree2} alt="tree2" /></a> </li>
                                <li> <a class="sim-thumb" data-image={tree3}><img src={tree3} alt="tree3" /></a> </li>
                                <li> <a class="sim-thumb" data-image={tree4}><img src={tree4} alt="tree4" /></a> </li>
                            </ul>
                        </div>
                    </div>




                </section>

        </ProductsWrapper>
    
    );

}

export default Products;