import axios from "axios";
import { useState, useEffect } from "react";

import Card from "../Card";
import Pokeinfo from "../Pokeinfo";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokemon = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextPage(res.data.next);
    setPrevPage(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const poke = await axios.get(item.url);

      setPokeData((state) => {
        state = [...state, poke.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        
        return state;
      });
    });
  };
  useEffect(() => {
    pokemon();
  }, [url]);

  return (
    <>
      <Card
        pokemon={pokeData}
        loading={loading}
        infoPokemon={(p) => setPokeDex(p)}
      />

      <div>
        {prevPage && (
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(prevPage);
            }}
          >
            Previous
          </button>
        )}
        {nextPage && (
          <button
            onClick={() => {
              setPokeData([]);
              setUrl(nextPage);
            }}
          >
            Next
          </button>
        )}
      </div>
      <div>
        <Pokeinfo data={pokeDex} />
      </div>
    </>
  );
};
export default Main;
