import { ReactNode } from "react";
import { Text, Flex } from "@chakra-ui/react";
import Title from "./Title";

interface GaleryProps{
    children:ReactNode;
}

export default function Galery({children}:GaleryProps){

    const maxWidth = 0;

    return(
        <Flex
            w={{base:"300px",lg:"1160px"}} 
            display="flex" 
            flexDir="column" 
            alignSelf={{ base:"flex-end",lg:"center" }}
            h= {{ base:"100%",lg:"700px" }}
            mb={20}
            >

        <Title  title="Cidades +100" />

        <Flex  
            display="flex"  
            flexDir={{base:"column", lg:"row"}} 
            flexWrap="wrap" 
            justifyContent="space-between" 
            rowGap={10} 
            ml={maxWidth}
            mr={maxWidth}
            >
            {children}
        </Flex>
    </Flex>
    )
}