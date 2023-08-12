import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../helper/hooks/index";
import "./style.css";

const Pokemon = () => {
  const [filtering, setFiltering] = useState("");
  const [page, setPage] = useState(0);
  const [selecting, setSelecting] = useState(0)

  const dataFetchPokemon = useFetch({
    url: `https://pokeapi.co/api/v2/pokemon?limit=${selecting}&offset=${page * 20}`,
    defaultData: [],
  });

  function handleFilter(params) {
    setFiltering(params.target.value);
  }

  function handlePrevious() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  function handleSelect(params) {
    setSelecting(params.target.value);
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
      <select onChange={handleSelect} defaultValue={""}>
        <option value="" disabled>
          Select
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
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
