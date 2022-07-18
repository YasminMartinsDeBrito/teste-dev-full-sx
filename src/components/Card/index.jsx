import {
  Box,
  Button,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import Pokeinfo from "../Pokeinfo";

const Card = ({ pokemon, loading, infoPokemon}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        pokemon.map((item, index) => (
          <Box
            key={index}
            background="#E5E5E5"
            boxShadow="7px 7px 7px 0px rgba(0,0,0,0.22)"
            h="350px"
            w="200px"
            rounded="lg"
            m="15px"
            padding="5px"
            color="green.200"
            borderRadius="8px"
            fontWeight={800}
          >
            <button onClick={() => infoPokemon(item)}>Detail</button>
            <Box width='100%' margin='0px auto'>
              <Image
                margin='0px auto'
                boxShadow="7px 7px 1px 1px rgba(0,0,0,0.22)"
                borderRadius="8px 8px 8px 8px"
                background="#fff"
                w="180px"
                h='160px'
                display="flex"
                src={item.sprites.front_default}
                alt=""
              />
            </Box>

            <Box
            fontSize='12px'
            >
              <small>id: {item.id}</small>
              <h3>Nome: {item.name}</h3>
              <p>Peso: {item.weight}</p>
              <p>Altura: {item.height}</p>

            
            </Box>
           
          </Box>
        ))
      )}
    </>
  );
};

export default Card;
