
import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";

const App = () => {
  const [pokemons, setPokemons] = useState([]);
  const [load, setLoad] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=10"
  );

  const getPokemons = async () => {
    const res = await fetch(load);
    const data = await res.json();

    setLoad(data.next);

    function createPokemonObject(result) {
      result.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();

        setPokemons((currentList) => [...currentList, data]);
      });
    }
    createPokemonObject(data.results);
    await console.log(pokemons);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className="app-container">
      <h1>List Pokemon</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {pokemons.map((pokemon, index) => (
            <Pokemon
              id={pokemon.id}
              name={pokemon.name}
              image={pokemon.sprites.other.dream_world.front_default}
              type={pokemon.types[0].type.name}
              key={index}
            />
          ))}
        </div>
      </div>
      <button>Load More</button>
    </div>
  );
};
export default App;
