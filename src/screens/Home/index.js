import React, { useEffect, useState } from "react";
import axios from "axios";

import Character from "../../components/Character";

const Home = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const response = await axios("https://rickandmortyapi.com/api/character");
    setCharacters(response.data.results);
  }, []);

  return (
    <div>
      <h1>Holi</h1>
      {characters.map((character) => (
        <Character name={character.name} />
      ))}
    </div>
  );
};

export default Home;
