import React from 'react';
import ProductsWrapper from "./components/ProductsWrapper";
import "./Products.css";

function Products() {


    //   $('.sim-thumb').on('click', function() {
    //     $('#main-product-image').attr('src', $(this).data('image'));
    //   })
      

    return (

        <ProductsWrapper>

                <section class="four-up-feature wrap">
                    <div class="row four-up-feature-header align-center">


                        <div class="medium-8 columns">
                        <h2>While we can make just about anything you can imagine, here is a sample of our basic products.</h2>
                        </div>
                    </div>
                    <div class="row align-spaced">
                    <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src="https://placehold.it/180x180"/></a>
                        </div>
                        <h2 class="product-card-title"><a href="#">Product Name</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                        <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src="https://placehold.it/180x180"/></a>
                        </div>
                        <h2 class="product-card-title"><a href="#">Product Name</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                        <div class="product-card">
                        <div class="product-card-thumbnail">
                            <a href="#"><img src="https://placehold.it/180x180"/></a>
                        </div>
                        <h2 class="product-card-title"><a href="#">Product Name</a></h2>
                        <span class="product-card-desc">Product Description</span>
                        <span class="product-card-price">$9.99</span><span class="product-card-sale">$12.99</span>
                        <div class="product-card-colors">
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                            <button href="#" class="product-card-color-option"><img src="https://placehold.it/30x30"/></button>
                        </div>
                        </div>


                    </div>

                    {/* <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt="" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+2"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+3"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                            </ul>
                        </div>
                    </div>


                    <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt="" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+2"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+3"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                            </ul>
                        </div>
                    </div>


                    <div class="row align-center">
                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image" src="https://placehold.it/350x350?text=Image+1" alt="" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+1"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+2"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                                <li> <a class="sim-thumb" data-image="https://placehold.it/350x350?text=Image+3"><img src="https://placehold.it/50x50" alt="" /></a> </li>
                            </ul>
                        </div>
                    </div> */}




                </section>

        </ProductsWrapper>
    
    );

}

export default Products;