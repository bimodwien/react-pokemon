import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../helper/hooks/index";
import "./style.css";

const Pokemon = () => {
  const [filtering, setFiltering] = useState("");
  const [page, setPage] = useState(0);

  const dataFetchPokemon = useFetch({
    url: `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${page * 20}`,
    defaultData: [],
  });

  function handleFilter(params) {
    setFiltering(params.target.value);
    console.log('ini filetring',filtering);
  }

  function handlePrevious(){
    setPage(page - 1)
  }

  function handleNext() {
    setPage(page + 1)
  }

  // function handleNavigate(parameter){
  //   setPage(parameter)
  // }

  // function handleNavigate2(params) {
  //   return () => {
  //     setPage(params)
  //   }
  // }

  const filterPokemon = dataFetchPokemon?.filter((dataPokemon) => {
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
            {mapPokemon.name} .{" "}
            <Link to={`/details/${mapPokemon.url.split("/")[6]}`}>
              {mapPokemon.url.split("/")[6]}
            </Link>
          </div>
        );
      })}
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>

      {/* <br />

      ini buat ngehandle navigate dengan input yang berbeda
      <button onClick={() => {handleNavigate(page-1)}}>previous</button>
      <button onClick={() => {handleNavigate(page+1)}}>next</button>

      <br />

      ini hampir sama kayak yang diatas
      <button onClick={handleNavigate2(page-1)}>previous</button>
      <button onClick={handleNavigate2(page+1)}>next</button> */}
    </>
  );
};

export default Pokemon;
