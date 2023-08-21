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
            <Link to={`/details/${mapPokemon.url.split("/")[6]}`}>
              <div key={mapPokemon.name} className="content-detail">
                #{mapPokemon.url.split("/")[6]}
                <img src={images} alt="images pokemon" />
                <div className="content-name">
                  {mapPokemon.name}
                </div>
                  
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Content;
