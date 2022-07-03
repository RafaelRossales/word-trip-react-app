import { Flex } from "@chakra-ui/react";

interface DarkLayerProps{
    width:number | string
    height:number | string
}

export default function DarkLayer({width,height}:DarkLayerProps){
    return(
        <Flex 
        pos="absolute"
        w={width} 
        h={height} 
        bg="linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url(.jpg);"
        >
        </Flex>
    )
}