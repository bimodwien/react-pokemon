import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const PokemonDetail = () => {
  const parameter = useParams();
  // console.log(parameter);

  const [dataDetail, setDataDetail] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${parameter.pokemonId}/`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setDataDetail(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [parameter.pokemonId]);

  console.log(dataDetail);
  return (
    <>
      <img
        src={dataDetail.sprites?.other["official-artwork"].front_default}
        alt={dataDetail.name}
      />
      <div>Name = {dataDetail.name}</div>
      {/* kenapa dikasih ?, karena ada kemungkinan dataDetail.stats bisa undefined, kalo object ga perlu dikasih ? */}
      <div>
        {dataDetail.stats?.map?.((dataStats) => {
          return (
            <div key={dataStats.stat.name}>
              {dataStats.stat.name} = {dataStats.base_stat}
            </div>
          );
        })}
      </div>
      <div>
        {dataDetail.types?.map((dataTypes) => {
          return <div key={dataTypes.slot}>Type = {dataTypes.type.name}</div>;
        })}
      </div>

      <Link to="/">back</Link>
    </>
  );
};

export default PokemonDetail;
