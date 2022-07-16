import { createContext } from 'react';

const PokemonContext = createContext({
  user: null,
  setToPokedex: () => {}
});

export default PokemonContext;
