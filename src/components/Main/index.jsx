import axios from "axios";
import { useState, useEffect } from "react";

import Card from "../Card";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../Header";
import Pokeinfo from "../Pokeinfo";
import Search from "../Search";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");
  const [nextPage, setNextPage] = useState();
  const [prevPage, setPrevPage] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState(pokeData);

  const showPokemon = (pokemons) => {
    setSearch(pokemons);
    setFilter(
      pokeData.filter((pokemon) =>
        pokemon.name.toUpperCase().includes(pokemons.toUpperCase())
      )
    );
  };

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

  console.log(filter);

  return (
    <>
      <Header
        bg="#439f"
        nextPage={nextPage}
        prevPage={prevPage}
        setPokeData={setPokeData}
        setUrl={setUrl}
        setSearch={setSearch}
        showPokemon={showPokemon}
        search={search}
      />

      <Flex
        h="100%"
        ml={["5vw", "20px"]}
        mr={["0", "20px"]}
        wrap="wrap"
        justify="center"
        align="center"
        flexDirection="row"
      >
        {search !== "" ? (
          <Search
            setSearch={setSearch}
            filters={filter}
            infoPokemon={(p) => setPokeDex(p)}
          />
        ) : (
          <Box>
            <Card
              pokemon={pokeData}
              loading={loading}
              infoPokemon={(p) => setPokeDex(p)}
            />
            <Box className="right-content">
          <Pokeinfo data={pokeDex} />
        </Box>
          </Box>
        )}
        

      </Flex>
    </>
  );
};
export default Main;
