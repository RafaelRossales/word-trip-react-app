
import { Box,Flex,Text} from "@chakra-ui/react";

interface InfoProps{
    amount:number;
    description:string
}

export default function Info({amount,description}:InfoProps){
    
    return(
        <Box
        pos="relative"
        display="flex" 
        flexDir={{base:'column', lg:'row'}}
        alignContent= "center"  
        justifyContent= {{base:'flex-start', lg:'center'}}
        flexWrap="wrap"
        w="98px"
        h="99px">
            <Text 
            fontSize={["24px","48px"]} 
            fontWeight={600}
            color="yellow.900"
            >
            {amount}
            </Text>

            <Text 
            fontWeight={[400,600]}
            fontSize={["15px","24px"]}
            >
            {description}
            </Text>
        </Box>
    )
}