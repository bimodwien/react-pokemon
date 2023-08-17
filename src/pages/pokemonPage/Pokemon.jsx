import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../../helper/hooks/index";

// import Content from "../../components/content";
// import Filter from "../../components/filter";
// import Pagination from "../../components/pagination";
// import Select from "../../components/select";


import "./style.css";

const Pokemon = () => {
  const [filtering, setFiltering] = useState("");
  const [page, setPage] = useState(0);
  const [select, setSelect] = useState(20);
  const offset = page * select;

  const dataFetchPokemon = useFetch({
    url: `https://pokeapi.co/api/v2/pokemon?limit=${select}&offset=${offset}`,
    defaultData: [],
  });

  function handleFilter(params) {
    // console.log(arguments)
    setFiltering(params.target.value);
  }

  function handlePrevious() {
    setPage(page - 1);
  }

  function handleNext() {
    setPage(page + 1);
  }

  function handleSelect(params) {
    setSelect(params.target.value);
    setPage(Math.ceil(offset / params.target.value));
    setPage(0);
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
      {/* <Filter/> */}
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
      {/* <Select/> */}
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
      {/* <Content/> */}
      <button onClick={handlePrevious}>previous</button>
      <button onClick={handleNext}>next</button>

      {/* <Pagination/> */}
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
