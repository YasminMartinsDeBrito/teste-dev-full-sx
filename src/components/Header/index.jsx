import { Box, Button, Container, Flex, Input, Text } from "@chakra-ui/react";

const Header = ({
  nextPage,
  setPokeData,
  setUrl,
  prevPage,
  setSearch,
  showPokemon,
  search,
}) => {
  return (
    <>
      <Container m="0" bg="#434" textAlign="center" color="#fff">
        <Text m="0" p="0" fontSize="20px">
          Pokemon List
        </Text>
        <Flex display="flex" justifyContent="space-between" alignItems="end">
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            {prevPage && (
              <Button
                _hover={{ bg: "green.300" }}
                height="30px"
                borderRadius="7px 7px 0 0"
                color="#392e59 "
                width="100px"
                mt="7px"
                onClick={() => {
                  setPokeData([]);
                  setUrl(prevPage);
                }}
                bg="green.200"
              >
                Previous
              </Button>
            )}
            {nextPage && (
              <Button
                _hover={{ bg: "green.300" }}
                height="30px"
                borderRadius="0 0 7px 7px"
                color="#392e59 "
                width="100px"
                mt="7px"
                onClick={() => {
                  setPokeData([]);
                  setUrl(nextPage);
                }}
                bg="green.200"
              >
                Next
              </Button>
            )}
          </Box>
          <Box>
            <Input
              p="8px"
              m="5px"
              placeholder="Pesquise aqui seu pokemon"
              onChange={(event) => setSearch(event.target.value)}
            />
            <Button
              bg="#8ae461"
              border="none"
              p="10px"
              m="5px"
              borderRadius='6px'
              onClick={() => showPokemon(search)}
            >
              Pesquisar
            </Button>
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Header;
