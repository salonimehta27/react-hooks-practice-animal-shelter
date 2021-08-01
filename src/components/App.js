import React, { useState, useEffect } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });


  function handleAdoption(id) {
    const updatedList = pets.map((pet) => {
      return pet.id === id ? { ...pet, isAdopted: true } : pet
    })
    setPets(updatedList)
  }
  function handleChange(e) {
    setFilters({ ...filters, [e.target.name]: e.target.value })
  }
  function handleFindPetsClick() {

    let baseURL = "http://localhost:3001/pets";

    if (filters.type !== "all") {
      baseURL += `?type=${filters.type}`
    }
    fetch(baseURL)
      .then(r => r.json())
      .then(data => setPets(data))
  }
  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters onChangeType={handleChange} onFindPetsClick={handleFindPetsClick} />
          </div>
          <div className="twelve wide column">
            <PetBrowser pets={pets} onAdoptPet={handleAdoption} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
