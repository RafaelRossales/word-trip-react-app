import { SimpleGrid,Flex,Box,Text,HStack} from "@chakra-ui/react";
import DetailBanner from "../../Components/Banner/PageBanner";
import Card from "../../Components/Card";
import Galery from "../../Components/Galery";
import Header from "../../Components/Header";
import Info from "../../Components/Info";

export default function Africa(){

    const maxWidth = 0;

    return(
        <SimpleGrid display="flex"  flexDirection="column" h="100%">
            <Header/>
            <DetailBanner  
            background="./images/africa_page.jpg"  
            title="África" />

            <Flex 
                display="flex" 
                flexDir="column" 
                pos="relative" 
                gap={20}
                ml={maxWidth}
                mr={maxWidth}
                >
            <Flex 
                mt={["24px","40px"]} 
                display="flex" 
                justifyContent="center" 
                flexDir={["column","row"]}
                >
                <Box 
                    w={["343px","600px"]}  
                    h={["146px","211px"]}
                    mb={50} 
                    display="flex" 
                    flexDir={["column","row"]}
                    alignSelf={{base:"center"}}
                    flexWrap="wrap">
                    <Text 
                    fontSize={["14px","24px"]} 
                    align="justify" 
                    lineHeight={["21px","36px"]} 
                    fontWeight={400}>
                        O mundo é repleto de destinos incríveis para quem deseja conhecer novos 
                        lugares e não abre mão de criar memórias inesquecíveis. 
                        Se você tem esse espírito aventureiro, quer arrumar as malas e 
                        partir para uma nova viagem, você precisa pensar na possibilidade 
                        de fazer turismo na África. Certamente, as opções desse continente 
                        poderão lhe surpreender.
                    </Text>
                </Box>
                <Box ml={["15px","100px"]} mt={55}>
                    <HStack direction="column" spacing={65} >
                            <Info amount={54} description="países"/>
                            <Info amount={2092} description="línguas"/>
                            <Info amount={45} description="cidades+100"/>
                    </HStack>
                </Box>
            </Flex>
        <Galery>
            <Card 
            image="./images/doha.jpg"
            flag="./images/qatar_flag.png"
            country="Catar"
            city="Doha"
            />
            <Card 
            image="./images/tokio.jpg"
            flag="./images/japan_flag.png"
            country="Japão"
            city="Tókio"
            />
            <Card 
            image="./images/maldivas.jpg"
            flag="./images/sri_lanka_flag.png"
            country="Sri Lanka"
            city="Maldivas"
            />
            <Card 
            image="./images/tailandia.jpg"
            flag="./images/tailand_flag.png"
            country="Bangkok"
            city="Tailândia"
            />
            <Card 
            image="./images/tbilisi.jpg"
            flag="./images/georgia_flag.png"
            country="Geórgia"
            city="Tbilisi"
            />
        </Galery>
    </Flex>

        </SimpleGrid>
    )
}