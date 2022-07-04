import { SimpleGrid,Flex,Box,Text,HStack} from "@chakra-ui/react";
import DetailBanner from "../../Components/Banner/PageBanner";
import Card from "../../Components/Card";
import Galery from "../../Components/Galery";
import Header from "../../Components/Header";
import Info from "../../Components/Info";


export default function NorthAmerica(){

    const maxWidth = 0;

    return(
        <SimpleGrid display="flex"  flexDirection="column" h="100%">
        <Header/>
        <DetailBanner  
        background="./images/north_america_page.jpg" 
        title="América do Norte" />

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
                display="flex"
                mb={[0,50]} 
                flexDir={["column","row"]}
                alignSelf={{base:"center"}}
                flexWrap="wrap">
                <Text 
                fontSize={["14px","24px"]} 
                align="justify" 
                lineHeight={["21px","36px"]} 
                fontWeight={400}>
                    A América do Norte está localizada no extremo norte das Américas e é composta por apenas três países: 
                    Estados Unidos, Canadá e México, além de territórios de domínios europeus, como a Groelândia 
                    (pertencente ao Reino da Dinamarca, com representação no parlamento) e Bermudas (dependência britânica).
                </Text>
            </Box>
            <Box ml={["15px","100px"]} mt={55}>
                <HStack direction="column" spacing={65} >
                    <Info amount={3} description="países"/>
                    <Info amount={3} description="línguas"/>
                    <Info amount={9} description="cidades+100"/>
                </HStack>
            </Box>
        </Flex>
    <Galery>
    <Card 
    image="./images/toronto.jpg"
    flag="./images/canada_flag.png"
    country="Canadá"
    city="Toronto"
    />
    <Card 
    image="./images/newyork.jpg"
    flag="./images/usa_flag.png"
    country="Estados Unidos"
    city="Nova York"
    />
    <Card 
    image="./images/nuuk.jpg"
    flag="./images/greenland_flag.png"
    country="Groelândia"
    city="Nuuk"
    />
    <Card 
    image="./images/mexico.jpg"
    flag="./images/mexico_flag.png"
    country="México"
    city="Cidade do México"
    />
    <Card 
    image="./images/miami.jpg"
    flag="./images/usa_flag.png"
    country="Estados Unidos"
    city="Miami"
    />
    </Galery>
</Flex>

    </SimpleGrid>
    )
}