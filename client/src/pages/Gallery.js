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
import tree4 from "./components/imgs/tree-pic4.jpg";
import clubhouse from "./components/imgs/clubhouse-pic.jpeg";
import GalleryWrapper from "./components/GalleryWrapper";
import "./Gallery.css";
import ModalImage from "react-modal-image";
// import Enlarge from "./components/Enlarge";
import $ from 'jquery';

function Gallery() {

      const switchPic1 = (e) => {
          e.preventDefault();
          console.log("works")

          $('.sim-thumb1').on('click', function() {
            $('#main-product-image1').attr('src', $(this).data('image')); 
            console.log()
          });

      };

      const switchPic2 = (e) => {
          e.preventDefault();
          console.log("works")

          $('.sim-thumb2').on('click', function() {
            $('#main-product-image2').attr('src', $(this).data('image')); 
          });

      };      
    
      const switchPic3 = (e) => {
          e.preventDefault();
          console.log("works")

          $('.sim-thumb3').on('click', function() {
            $('#main-product-image3').attr('src', $(this).data('image')); 
          });

      };

      const switchPic4 = (e) => {
          e.preventDefault();
          console.log("works")

          $('.sim-thumb4').on('click', function() {
            $('#main-product-image4').attr('src', $(this).data('image')); 
          });

      };

        
    return (

        <GalleryWrapper>

                <section class="four-up-feature wrap">

                    <div class="row four-up-feature-header align-center">


                        <div class="medium-8 columns">
                            <h2 class="product-head">Product Category View</h2>
                        </div>

                    </div>
                    
                        <p>
                            <a className="page" href="/galleryView">switch to gallery view</a>
                        </p> 

                        

                <p>Click on the Images to Switch between Photos</p>

                    <div class="row align-center">

                        <div class="product-image-gallery">
                            <img 
                                
                                 class="pdp-product-image" id="main-product-image1" src={gate} alt="gate"

                            />

                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a onClick={switchPic1} class="sim-thumb1" data-image={gate}><img src={gate} alt="gate" /></a> </li>
                                <li> <a onClick={switchPic1} class="sim-thumb1" data-image={gate2}><img src={gate2} alt="gate2" /></a> </li>
                                <li> <a onClick={switchPic1} class="sim-thumb1" data-image={gate3}><img src={gate3} alt="gate3" /></a> </li>
                                <li> <a onClick={switchPic1} class="sim-thumb1" data-image={gate4}><img src={gate4} alt="gate4" /></a> </li>
                            </ul>
                            
                        </div>




                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image2" src={sign} alt="sign" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a onClick={switchPic2} class="sim-thumb2" data-image={sign}><img src={sign} alt="sign" /></a> </li>
                                <li> <a onClick={switchPic2} class="sim-thumb2" data-image={sign2}><img src={sign2} alt="sign2" /></a> </li>
                                <li> <a onClick={switchPic2} class="sim-thumb2" data-image={sign3}><img src={sign3} alt="sign3" /></a> </li>
                                <li> <a onClick={switchPic2} class="sim-thumb2" data-image={sign4}><img src={sign4} alt="sign4" /></a> </li>
                            </ul>
                        </div>




                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image3" src={tree} alt="tree" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a onClick={switchPic3} class="sim-thumb3" data-image={tree}><img src={tree} alt="tree" /></a> </li>
                                <li> <a onClick={switchPic3} class="sim-thumb3" data-image={tree4}><img src={tree4} alt="tree2" /></a> </li>
                                <li> <a onClick={switchPic3} class="sim-thumb3" data-image={tree}><img src={tree} alt="tree3" /></a> </li>
                                <li> <a onClick={switchPic3} class="sim-thumb3" data-image={tree4}><img src={tree4} alt="tree4" /></a> </li>
                            </ul>
                        </div>

                        <div class="product-image-gallery">
                            <img class="pdp-product-image" id="main-product-image4" src={clubhouse} alt="clubhouse" />
                            <br />
                            <ul class="menu product-thumbs align-center">
                                <li> <a onClick={switchPic4} class="sim-thumb4" data-image={clubhouse}><img src={clubhouse} alt="clubhouse" /></a> </li>
                                <li> <a onClick={switchPic4} class="sim-thumb4" data-image={clubhouse}><img src={clubhouse} alt="clubhouse2" /></a> </li>
                                <li> <a onClick={switchPic4} class="sim-thumb4" data-image={clubhouse}><img src={clubhouse} alt="clubhouse3" /></a> </li>
                                <li> <a onClick={switchPic4} class="sim-thumb4" data-image={clubhouse}><img src={clubhouse} alt="clubhouse4" /></a> </li>
                            </ul>
                        </div>

                    </div>

                </section>

        </GalleryWrapper>
    
    );

}

export default Gallery;