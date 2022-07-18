import { Avatar, Box, Button, Image, Stack } from "@chakra-ui/react";

const Search = ({ loading, filters, infoPokemon }) => {
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          {filters.map((poke, index) => (
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
              <Box width="100%" margin="0px auto">
                {poke.img ? (
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
                    src={poke.sprites.front_default}
                    alt=""
                  />
                )}
              </Box>

              <Box fontSize="12px" display="flex" flexDirection="column">
                <small>id: {poke.id}</small>
                <h3>Nome: {poke.name}</h3>
                <p>Peso: {poke.weight}</p>
                <p>Altura: {poke.height}</p>
              </Box>
              <button onClick={() => infoPokemon(poke)}>Detail</button>
            </Box>
          ))}
        </>
      )}
    </>
  );
};
export default Search;
