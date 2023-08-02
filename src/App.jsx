import React from "react";
import Pokemon from "./components/pokemonPage/Pokemon";
import PokemonDetail from "./components/pokeDetails/PokemonDetail";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pokemon />}></Route>
        <Route path="/details/:pokemonId" Component={PokemonDetail}></Route>
      </Routes>
    </div>
  );
}

export default App;
