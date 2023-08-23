import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchDetail } from "../../helper/hooks";

import "./detail.css";

const PokemonDetail = () => {
  const parameter = useParams();

  const dataDetailPokemon = useFetchDetail({
    url: `https://pokeapi.co/api/v2/pokemon/${parameter.pokemonId}/`,
    defaultData: {},
  });
  return (
    <>
      <div className="content-body">
        <div className="details-name">{dataDetailPokemon.name}</div>
        <div className="content-details">
          <div className="content-details-photo">
            <img src={dataDetailPokemon.sprites?.other["official-artwork"].front_default} alt={dataDetailPokemon.name} className="detail-images"/>
          </div>
          {/* kenapa dikasih ?, karena ada kemungkinan dataDetail.stats bisa undefined, kalo object ga perlu dikasih ? */}
          <div className="content-details-status">
            <div>
              {dataDetailPokemon.stats?.map?.((dataStats) => {
                return (
                  <div key={dataStats.stat.name}>
                    {dataStats.stat.name} = {dataStats.base_stat}
                  </div>
                );
              })}
            </div>
            <div className="content-details-tag">
              {dataDetailPokemon.types?.map((dataTypes) => {
                return (
                  <div key={dataTypes.slot} className="type-details">
                    #{dataTypes.type.name}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="button-to-home">
          <Link to="/" className="link-to-home">Back To Home</Link>
        </div>
      </div>
    </>
  );
};

export default PokemonDetail;
