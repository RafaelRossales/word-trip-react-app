import { Flex,Text } from "@chakra-ui/react"

interface TitleProps{
    title:string
}
export default function Title({title}:TitleProps){

    return(
        <Flex maxWidth="100vw">
            <Text 
                textAlign="right" 
                fontSize="36px" 
                fontWeight={500} 
                mb={{ base:'20px',lg:'30px' }}
                >
                {title}
            </Text>
        </Flex>
    )
}