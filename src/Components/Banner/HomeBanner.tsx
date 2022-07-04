import { Box, Flex,Text, useBreakpointValue } from "@chakra-ui/react";
import { Image } from '@chakra-ui/react'


export default function HomeBanner(){

    let isWidescreen = useBreakpointValue({
        base:false,
        lg:true
    })

    return(    
        <Flex
            w={['375px','100vw']}
            h={['163px','368.21px']}
            display="flex"
            flexDirection="row"
            >

            <Box>
                <Image 
                    pos="relative" 
                    src="/images/background.png"
                    w={['375px','100vw']}
                    h={["163px","335px"]}
                />
            </Box>

            <Box position="absolute" ml={{ base: "16px",lg:"140px" }}>
                <Text
                display="flex"
                flexWrap="wrap"
                fontSize={{ base: "20px",lg:"36px" }}
                fontWeight={500}
                w={{ base: "238px",lg:"426px" }}
                h={{ base: "58px",lg:"108px" }}
                lineHeight={{ base: "30px",lg:"54px" }}
                mt={{base: "30px",lg:"6.25rem" }}
                color="white.900"
                >
                    5 Continentes, 
                    <p>infinitas possibilidades.</p>
                </Text>

            <Box w={{ base: "333px",lg:"524px" }} mt={{ base: "8px",lg:"20px" }}>
                <Text
                color="white.900"
                fontSize={{ base: "14px",lg:"20px" }}
                fontWeight={ isWidescreen ? 'normal': 400}
                >
                Chegou a hora de tirar do papel a viagem que você 
                sempre sonhou.
                </Text>
            </Box>
            </Box>

        {isWidescreen &&  
            <Box 
            left="860px"
            mt="90px"
            pos="absolute">
            <Image 
                w="417.15px"
                h="270.74px"
                src="/images/airplane.png"
                transform="rotate(-3deg)"
                />
            </Box>
        }
        </Flex>
    )
}