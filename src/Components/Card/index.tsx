import { Box,Image, SimpleGrid, Text } from "@chakra-ui/react";
import { useState } from "react";

interface CardProps{
    image:string
    flag:string
    country:string
    city:string
}

export default function Card({image,flag,country,city}:CardProps){

    return(
    <SimpleGrid
        w="256px"  
        height="279px" 
        bg="white.900" 
        border= "1px solid rgba(255, 186, 8, 0.5)"
        borderRadius={4}
        cursor="pointer"

    >
    <Box>
        <Image 
            h="173px" 
            objectFit="cover"
            src={image} 
            borderRadius="4px 4px 0px 0px" 
        />
    </Box>
        <Box  display="flex"  flexDir="row">
            <Box ml={5} mt={3}>
                <Text fontSize={20} fontWeight={600}>{country}</Text>
                <Text fontSize={16} fontWeight={500}>{city}</Text>
            </Box>
            <Box mt={25}   ml={210} pos="absolute">
                <Image  w="30" h="30" borderRadius="100%" src={flag} />
            </Box>
        </Box>
    </SimpleGrid>
    )
}