import React from "react";
import { Link } from "@reach/router";

const Pet = ({ name, animal, breed, media, location, id }) => {
  let hero = "https://via.placeholder.com/300.png/09f/fff";
  if (media.length) {
    hero = media[0].small;
  }

  return (
    <Link to={`${process.env.PUBLIC_URL}/details/${id}`} className="pet">
      <div className="image-container">
        <img src={hero} alt={name} />
      </div>
      <div className="info">
        <h1>{name}</h1>
        <h2>{`${animal} - ${breed} - ${location}`}</h2>
      </div>
    </Link>
  );
  // return (
  //   <div>
  //     <h2>Name: {name}</h2>
  //     <h3>Location: {location}</h3>
  //     <h3>Type: {animal}</h3>
  //     <h3>Breed: {breed}</h3>
  //     <div>
  //       Photos:{" "}
  //       {media.map((photo, index) => (
  //         <a
  //           key={`photo-${index}`}
  //           href={photo.large}
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           <img src={photo.small} alt={`p-${index}`} />
  //         </a>
  //       ))}
  //     </div>
  //     <hr />
  //   </div>
  // );
};

export default Pet;
