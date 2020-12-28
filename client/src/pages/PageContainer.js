import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Gallery from "./Gallery";
import Product from "./Product";
import "./PageContainer.css";

function PageContainer() {

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

              <Footer />
          </div>        

        </Router>

    );

}

export default PageContainer;
