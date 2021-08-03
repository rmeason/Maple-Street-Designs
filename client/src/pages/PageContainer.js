import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Gallery from "./Gallery";
import GalleryView from "./GalleryView";
import Product from "./Product";
import "./PageContainer.css";
import Loading from "./Loading"
import $ from 'jquery';

function PageContainer() {

    const { isLoading };

    if (isLoading) {
        return <Loading />;
      }

    return (

        <Router>

          <div>
              <TopBar />
  
              <Route exact path={["/", "/home"]}>
                  <Home />
              </Route>

              <Route exact path="/gallery">
                  <Gallery />
              </Route>

              <Route exact path="/product">
                  <Product />
              </Route>

              <Route exact path="/galleryView">
                  <GalleryView />
              </Route>

              <Footer />
          </div>        

        </Router>

    );

}

export default PageContainer;
