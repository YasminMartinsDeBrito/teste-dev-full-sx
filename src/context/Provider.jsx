import React, { useState, useCallback } from 'react';
import PokemonContext from './Context';

const defaultUser = {
  name: 'Dev',
  pokedex: {}
};

const PokemonProvider = ({ children }) => {
  const [user, setUser] = useState(defaultUser);

  const setToPokedex = useCallback((pokemon) => {
    setUser((currentUser) => ({
      ...currentUser,
      pokedex: {
        ...currentUser.pokedex,
        [pokemon.name]: pokemon
      }
    }));
  }, []);

  return (
    <PokemonContext.Provider value={{ user, setToPokedex }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
