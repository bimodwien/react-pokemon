import React, { useEffect, useState } from "react";

const Pokemon = () => {
  const [result, setResult] = useState([]);
  const [filtering, setFiltering] = useState("");

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setResult(data.results);
      })
      .catch((error) => {
        console.log("ini ada error");
      });
  }, []);

  function handleFilter(params) {
    setFiltering(params.target.value);
  }

  const filterPokemon = result.filter((dataPokemon) => {
    return dataPokemon.name.includes(filtering);
  });

  return (
    <>
      <div>Pokemon</div>
      <input type="text" onChange={handleFilter} />
      <br />
      hasil :{" "}
      {filterPokemon.map((mapPokemon) => {
        return (
          <div key={mapPokemon.name}>
            {mapPokemon.name} . {mapPokemon.url.split("/")[6]}
          </div>
        );
      })}
    </>
  );
};

export default Pokemon;
