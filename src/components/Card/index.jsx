import { Container } from "./styles";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, index) => (
          <Container key={index} onClick={() => infoPokemon(item)}>
            <img src={item.sprites.front_default} alt="" />
            <div>
              <small>id: {item.id}</small>
              <h2>Nome: {item.name}</h2>
              {/* {item.stats.map((stat) => (
                <div>
                  <p>Vida: {stat.base_stat}</p>
                  <p>Potencia: {stat.effort}</p>
                  <p>Poder: {stat.stat.name}</p>                
                </div>
              ))} */}
              {item.types.map((items, index) => (
                <div key={index}>
                  <p>modelo: {items.type.name}</p>
                </div>
              ))}
              <p>Peso: {item.weight}</p>

              <p>Altura: {item.height}</p>
            </div>
            
          </Container>
        ))
      )}
    </>
  );
};

export default Card;
