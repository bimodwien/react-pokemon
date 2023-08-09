import React from "react";
import { Link, useParams } from "react-router-dom";
import { useFetchDetail } from "../../helper/hooks";

const PokemonDetail = () => {
  const parameter = useParams();

  const dataDetailPokemon = useFetchDetail({
    url: `https://pokeapi.co/api/v2/pokemon/${parameter.pokemonId}/`,
    defaultData: {},
  });
  return (
    <>
      <img
        src={dataDetailPokemon.sprites?.other["official-artwork"].front_default}
        alt={dataDetailPokemon.name}
      />
      <div>Name = {dataDetailPokemon.name}</div>
      {/* kenapa dikasih ?, karena ada kemungkinan dataDetail.stats bisa undefined, kalo object ga perlu dikasih ? */}
      <div>
        {dataDetailPokemon.stats?.map?.((dataStats) => {
          return (
            <div key={dataStats.stat.name}>
              {dataStats.stat.name} = {dataStats.base_stat}
            </div>
          );
        })}
      </div>
      <div>
        {dataDetailPokemon.types?.map((dataTypes) => {
          return <div key={dataTypes.slot}>Type = {dataTypes.type.name}</div>;
        })}
      </div>

      <Link to="/">back</Link>
    </>
  );
};

export default PokemonDetail;
