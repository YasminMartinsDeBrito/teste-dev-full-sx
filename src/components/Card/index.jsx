import { Box, Image, Stack, Avatar, Container } from "@chakra-ui/react";

const Card = ({ pokemon, loading, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Container 
        m='10px'
        display='flex'
        flexWrap='wrap'
        justifyContent='center'>
          {pokemon.map((item, index) => (
            <Box
              key={index}
              bg='#a0ff948a'
              boxShadow="7px 7px 7px 0px #a6b1a5cc"
              h="350px"
              w="200px"
              m="15px"
              padding="5px"
              color="green.200"
              borderRadius="8px"
              fontWeight={800}
            >
              
              <Box >
                {item.img ? (
                  <Stack direction="column">
                    <Avatar src="" alt="" />
                  </Stack>
                ) : (
                  <Image
                    margin="0px auto"
                    boxShadow="7px 7px 1px 1px rgba(0,0,0,0.22)"
                    borderRadius="8px 8px 8px 8px"
                    background="#fff"
                    w="180px"
                    h="160px"
                    display="flex"
                    src={item.sprites.front_default}
                    alt=""
                  />
                )}
              </Box>

              <Box fontSize="12px">
                <small>id: {item.id}</small>
                <h3>Nome: {item.name}</h3>
                <p>Peso: {item.weight}</p>
                <p>Altura: {item.height}</p>
              </Box>
              <button onClick={() => infoPokemon(item)}>Detail</button>
            </Box>
          ))}
        </Container>
      )}
    </>
  );
};

export default Card;
