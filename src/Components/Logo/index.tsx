import {Image,Flex } from "@chakra-ui/react";

export default function Logo(){
    return(
        <Flex>
            <Image 
                src="/images/logo.png"
                alt="logo"
                w={{ base: "81px",lg:"184.06px" }}
                h={{ base:"20px",lg:'45.92px' }}
            />
        </Flex>
    )
}