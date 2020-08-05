import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams";
import Details from "./Details";

const App = () => {
  return (
    <React.StrictMode>
      <div>
        <header>
          <div
            style={{ display: "none" }}
          >{`PUBLIC_URL: ${process.env.PUBLIC_URL}`}</div>
          <Link to={`${process.env.PUBLIC_URL}/`}>Adopt me!</Link>
        </header>
        <Router basepath={`${process.env.PUBLIC_URL}`}>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </React.StrictMode>
  );
};

render(<App key="app" />, document.getElementById("root"));
