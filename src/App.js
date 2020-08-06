import React, { useState } from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./components/SearchParams";
import Details from "./components/Details";
import ThemeContext from "./contexts/ThemeContext";

const App = () => {
  const themeHook = useState("darkgreen");
  console.log(themeHook);
  return (
    <React.StrictMode>
      <ThemeContext.Provider value={themeHook}>
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
      </ThemeContext.Provider>
    </React.StrictMode>
  );
};

render(<App key="app" />, document.getElementById("root"));
