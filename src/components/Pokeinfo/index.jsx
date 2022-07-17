const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <>
          <h1>{data.name}</h1>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${data.id}.png`}
            alt={data.name}
          />
          <div>
            {data.abilities.map((pokemon) => (
              <>
                <div>
                  <h2>{pokemon.ability.name}</h2>
                </div>
              </>
            ))}
          </div>

          <div>
            {data.stats.map((pokemon) => (
              <h3>
                {pokemon.stats.name}:{pokemon.base_stat}
              </h3>
            ))}
          </div>
        </>
      )}
    </>
  );
};
export default Pokeinfo;
