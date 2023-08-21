import React from "react";
import { Link } from "react-router-dom";

import "../pages/pokemonPage/pages.css";

const Content = ({ listPokemon }) => {
  return (
    <>
      <div className="content-card">
        {listPokemon.map((mapPokemon) => {
          const images = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${mapPokemon.url.split("/")[6]}.png`;
          return (
            <div key={mapPokemon.name} className="content-detail">
              <Link to={`/details/${mapPokemon.url.split("/")[6]}`}>
                {mapPokemon.url.split("/")[6]}
              </Link>
              <img src={images} alt="" />
              {mapPokemon.name} .{" "}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Content;
