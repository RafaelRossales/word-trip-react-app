import { Flex, Image,SimpleGrid,Text } from "@chakra-ui/react"
import DarkLayer from "../Swiper/DarkLayer"

interface DetailBannerProps{
    background:string
    title:string
}

export default function DetailBanner({background,title}:DetailBannerProps){
    return(
        <SimpleGrid 
        maxWidth="100%"
        h= {{base:"150px",lg:"500px"}}
        >

            <Flex>
                <Image src={background} 
                w="100vw" 
                h={{base:"150px",lg:"500px"}}
                objectFit="cover"/>

                <Text 
                    w= {{base:"100vw", lg:"100vw"}}
                    h= {{base:"150px",lg:"500px"}}

                    position="absolute"
                    color="white.900"
                    display="flex"
                    
                    justifyContent= {{base:"center", lg:"flex-start"}}
                    ml={{base:"0px", lg:"75px"}}
                    fontWeight={600}
                    fontSize={["28px","48px"]}
                    alignItems= {{base:"center", lg:"flex-end"}}
                    >
                    {title}
                </Text>
            </Flex>
        </SimpleGrid>
    )
}