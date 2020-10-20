import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Footer from "./components/Footer";
import Home from "./Home";
import Products from "./Products";

import "./PageContainer.css"

function PageContainer() {

    return (
      <Router>

        <div>
            <TopBar />
 
            <Route exact path={["/", "/home"]}>
                <Home />
            </Route>

            <Route path="/products">
                <Products />
            </Route>

            <Footer />
        </div>        

      </Router>
    );

}

export default PageContainer;
