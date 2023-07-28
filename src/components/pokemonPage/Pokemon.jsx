import React, { useEffect, useState } from 'react'

const Pokemon = () => {

const [result, setResult] = useState([])
const [filtering, setFiltering] = useState('')

useEffect(() => {
  fetch('https://pokeapi.co/api/v2/pokemon')
  .then((response) => {
    // console.log(response.status);
    return response.json()
  })
  .then((data) => {
    // console.log(data);
    setResult(data.results)
  })
  .catch((error) => {
    console.log('ini ada error');
  })
},[])

  function handleFilter(params) {
    setFiltering(params.target.value)
  }

  const pokemonUrl = result.map((pokeUrl) =>{
    return pokeUrl.url.split('/')
  })

  console.log(pokemonUrl);


  const filterPokemon = result.filter((dataPokemon)=> {
    return dataPokemon.name.includes(filtering)
  })

  // console.log(result);

  
  return (
    <>
      <div>Pokemon</div>  

      <input type="text" onChange={handleFilter} />   
      <br />
      hasil : {filterPokemon.map((mapPokemon) => {
        return <div key={mapPokemon.name}>{mapPokemon.name} . {mapPokemon.url.split('/')[6]}</div>

      })} 

 


      {/* {result.map((dataPokemon, index) => {
          return <div key={dataPokemon.name}>{index+1}. {dataPokemon.name}</div>     
      })} */}
    </>
  )
}

export default Pokemon