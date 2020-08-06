import React from "react";
import Pet from "./Pet";

const Results = ({ results }) => {
  return results && results.length ? (
    <div className="search">
      {results.map((pet) => (
        <Pet
          key={pet.id}
          id={pet.id}
          name={pet.name}
          animal={pet.type}
          breed={pet.breeds.primary}
          media={pet.photos}
          location={`${pet.contact.address.city}, ${pet.contact.address.state}`}
        />
      ))}
    </div>
  ) : (
    <div className="search">
      <p>
        <b>No Pets :(</b>
      </p>
    </div>
  );
};

export default Results;
