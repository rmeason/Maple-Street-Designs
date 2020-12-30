import React from 'react';
import "./GalleryView.css";
import gate from "./components/imgs/gate-pic.jpg";
import gate2 from "./components/imgs/gate-pic2.jpg";
import gate3 from "./components/imgs/gate-pic3.jpg";
import gate4 from "./components/imgs/gate-pic4.jpg";
import sign from "./components/imgs/sign-pic.jpg";
import sign2 from "./components/imgs/sign-pic2.jpg";
import sign3 from "./components/imgs/sign-pic3.jpg";
import sign4 from "./components/imgs/sign-pic4.jpg";
import sign5 from "./components/imgs/sign5.jpg"
import tree from "./components/imgs/tree-pic.jpg";
import tree4 from "./components/imgs/tree-pic4.jpg";
import clubhouse from "./components/imgs/clubhouse-pic.jpeg";
import GalleryWrapper from "./components/GalleryWrapper";
import ModalImage from "react-modal-image";

function GalleryView() {
    return (

        <GalleryWrapper>
        <div class="featured-image-block-grid">
            <div class="featured-image-block-grid-header columns text-center">
                <h2 className="gvTitle" >Gallery View</h2>

                <p>
                    <a className="page gallerySwitch button" href="/gallery">switch to product category view</a>
                </p> 

                <p className="clickOnImg">Click on the Images to Enlarge</p>

            </div>
            <div class="row large-up-4 small-up-2">
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={gate}
                    large={gate}
                    alt="gate"
                />
                </div>
                
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={gate2}
                    large={gate2}
                    alt="gate"
                />
                </div>
                
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={gate3}
                    large={gate3}
                    alt="gate"
                />
                </div>
                
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={gate4}
                    large={gate4}
                    alt="gate"
                />
                </div>
                
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={sign}
                    large={sign}
                    alt="sign"
                />
                </div>
            
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={sign2}
                    large={sign2}
                    alt="sign"
                />
                </div>
                
                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={sign3}
                    large={sign3}
                    alt="sign"
                />
                </div>

                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={sign4}
                    large={sign4}
                    alt="sign"
                />
                </div>

                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={sign5}
                    large={sign5}
                    alt="sign"
                />
                </div>

                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={tree}
                    large={tree}
                    alt="tree"
                />
                </div>

                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={tree4}
                    large={tree4}
                    alt="tree"
                />
                </div>

                <div class="featured-image-block column gView">
                <ModalImage className="galImg"
                    small={clubhouse}
                    large={clubhouse}
                    alt="clubhouse"
                />
                </div>

            </div>
        </div>

        </GalleryWrapper>

    );
};

export default GalleryView;