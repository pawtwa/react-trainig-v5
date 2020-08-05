import { createElement } from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return createElement("div", {}, [
    createElement("h1", { key: "adopt-me" }, "Adopt me!"),
    createElement(Pet, {
      key: "luna",
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    createElement(Pet, {
      key: "pepper",
      name: "Pepper",
      animal: "Bird",
      breed: "Cockatiel",
    }),
  ]);
};

render(createElement(App, { key: "app" }), document.getElementById("root"));
