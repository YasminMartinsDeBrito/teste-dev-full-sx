import { Link } from 'react-router-dom';

const PokemonCard = ({ name }) => {
  return (
    <li key={name}>
      <Link to={`/pokemons/${name}`}>{name}</Link>
    </li>
  );
};

export default PokemonCard;
