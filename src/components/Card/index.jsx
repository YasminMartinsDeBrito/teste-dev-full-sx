const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, index) => (
          <div key={index} onClick={() => infoPokemon(item)}>
            <small>{item.id}</small>
            <img src={item.sprites.front_default} alt="" />
            <h3>{item.name}</h3>
          </div>
        ))
      )}
    </>
  );
};

export default Card;
