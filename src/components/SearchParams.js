import React, { useState, useEffect, useContext } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./../hooks/useDropdown";
import Results from "./Results";
import ThemeContext from "../contexts/ThemeContext";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);
  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedDropdown, setBreed] = useDropdown("Breed", "", breeds);
  const [theme, setTheme] = useContext(ThemeContext);
  const [bgColor, BgColorDropdown] = useDropdown("Background Color", theme, [
    "darkblue",
    "darkgreen",
    "black",
  ]);
  const [pets, setPets] = useState([]);

  console.log(theme, bgColor);

  async function requestPets() {
    const { animals } = await pet.animals({
      location,
      breed,
      type: animal,
    });
    setPets(animals || []);
  }

  useEffect(() => {
    setBreeds([]);
    setBreed("");
    setPets([]);
    pet.breeds(animal).then(({ breeds }) => {
      console.log(breeds);
      setBreeds(breeds.map((breed) => breed.name));
    }, console.error);
  }, [animal, setBreed, setPets]);

  useEffect(() => {
    setTheme(bgColor);
  }, [bgColor, setTheme]);

  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestPets();
        }}
      >
        <label htmlFor="location">
          location {new Date().getSeconds()}
          <input
            id="location"
            value={location}
            placeholder="Location"
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>

        <AnimalDropdown />

        <BreedDropdown />

        <button style={{ backgroundColor: theme }}>Submit</button>
      </form>
      <BgColorDropdown />
      {pets ? <Results results={pets} /> : null}
    </div>
  );
};

export default SearchParams;
