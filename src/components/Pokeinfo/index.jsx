import { Avatar, Box, Flex, Image, Stack } from "@chakra-ui/react";
import React from "react";

const Pokeinfo = ({ data }) => {
  return (
    <>
      {!data ? (
        ""
      ) : (
        <Flex
        border='1px solid #000'
        borderRadius='10px'
        w='90vw'
        // h='600px'
        fontSize='10px'
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='center'
        
        
        >
        <Box
        textAlign='center'
        >
            <h1>{data.name}</h1>
            {data.img ? (
                      <Stack direction="column">
                        <Avatar src="" alt="" />
                      </Stack>
                    ) : (
            <Image
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
              alt=""
            /> 
                    )}
        </Box>
          
          <Box listStyleType='none'
            display='flex'
            flexDirection='column'
          >
            {data.abilities.map((poke, index) => (
                <div key={index} className="group">
                  <li>{" "} Ability : {poke.ability.name} </li>
                </div>
              ))}
          </Box>
          <Box 
          display='flex'
          margin='5px'
          textAlign='center'
          listStyleType='none'
          flexWrap='wrap'
          >
            {data.stats.map((poke, index) => (
                <h3 key={index}>
                  <li >{"  "}{poke.stat.name} : {poke.base_stat}{"  "}</li>
                </h3>
            ))}
          </Box>
        </Flex>
      )}
    </>
  );
};
export default Pokeinfo;
