import { Button, Container } from "@chakra-ui/react";

const Header = ({ nextPage, setPokeData, setUrl, prevPage }) => {
  return (
    <>
      <Container bg="#434">
        <h1>Pokemon List</h1>
        {prevPage && (
          <Button
            _hover={{ bg: "green.300" }}
            height="30px"
            borderRadius="0 0 7px 7px"
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
            borderRadius="7px 7px 0 0"
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
      </Container>
    </>
  );
};

export default Header;
