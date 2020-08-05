import { createElement } from "react";

const Pet = ({ name, animal, breed }) => {
  return createElement("div", {}, [
    createElement("h2", { key: "name" }, name),
    createElement("h3", { key: "animal" }, animal),
    createElement("h3", { key: "breed" }, breed),
  ]);
};

export default Pet;
