import React from "react";
import "./ProductsWrapper.css";

function SearchWrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

export default SearchWrapper;
