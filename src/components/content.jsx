import React from "react";
import { Link } from "react-router-dom"; 

const Content = ({listPokemon}) => {
  return (
    <>
      hasil :{" "}
      {listPokemon.map((mapPokemon) => {
        return (
          <div key={mapPokemon.name}>
            {mapPokemon.name} .{" "}
            <Link to={`/details/${mapPokemon.url.split("/")[6]}`}>
              {mapPokemon.url.split("/")[6]}
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default Content;
