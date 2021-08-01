import React from "react";

import Pet from "./Pet";

function PetBrowser({ pets, onAdoptPet }) {
  const petList = pets.map((pet) => <Pet key={pet.id}
    pet={pet}
    onAdoptPet={onAdoptPet}></Pet>)
  return <div className="ui cards">{petList}</div>;
}

export default PetBrowser;
