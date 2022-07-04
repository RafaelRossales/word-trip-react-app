import { SimpleGrid,Flex,Box,Text,HStack} from "@chakra-ui/react";
import DetailBanner from "../../Components/Banner/PageBanner";
import Card from "../../Components/Card";
import Galery from "../../Components/Galery";
import Header from "../../Components/Header";
import Info from "../../Components/Info";


export default function SouthAmerica(){

    const maxWidth = 0;

    return(
        <SimpleGrid display="flex"  flexDirection="column" h="100%">
        <Header/>

        <DetailBanner   background="./images/south_america_page.jpg"  title="América do Sul" />

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
                    A América do Sul é um subcontinente que faz parte do continente americano. Apresenta área de 17 milhões de km², 
                    com a maior extensão situada no hemisfério sul do planeta Terra. A população sul-americana é de mais de 434 milhões 
                    de habitantes, a qual é distribuída por 12 países e um departamento ultramarino francês.
                </Text>
            </Box>
            <Box ml={["15px","100px"]} mt={55}>
                <HStack direction="column" spacing={65} >
                    <Info amount={12} description="países"/>
                    <Info amount={4} description="línguas"/>
                    <Info amount={37} description="cidades+100"/>
                </HStack>
            </Box>
        </Flex>
        <Galery>
            <Card 
            image="./images/cuzco.jpg"
            flag="./images/peru_flag.png"
            country="Peru"
            city="Cuzco"
            />
            <Card 
            image="./images/buenosAires.jpg"
            flag="./images/argentina_flag.png"
            country="Argentina"
            city="Buenos Aires"
            />
            <Card 
            image="./images/taganga.jpg"
            flag="./images/colombia_flag.png"
            country="Colômbia"
            city="Santa Marta"
            />
            <Card 
            image="./images/maranhao.jpg"
            flag="./images/brazil_flag.png"
            country="Brasil"
            city="Maranhão"
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