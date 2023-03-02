import React, { useState, useEffect} from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    fetch("http://localhost:3001/pokemon")
    .then ((r) => r.json())
    .then(setPokemon);
  }, []);

  function handleAddPokemon (newPokemon){
    setPokemon([...pokemon, newPokemon]);
  }

  const displayPokemon = pokemon.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(search.toLowerCase())
  );
  
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onAddPokemon = {handleAddPokemon}/>
      <br />
      <Search onSearch = {setSearch}/>
      <br />
      <PokemonCollection pokemon = {displayPokemon}/>
      {/* At initial render, this was pokemon = {pokemon}; */}
    </Container>
  );
}

export default PokemonPage;
