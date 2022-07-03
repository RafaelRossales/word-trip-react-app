
import { SimpleGrid,Flex,Box,Text,HStack} from "@chakra-ui/react";
import DetailBanner from "../../Components/Banner/PageBanner";
import Card from "../../Components/Card";
import Galery from "../../Components/Galery";
import Header from "../../Components/Header";
import Info from "../../Components/Info";

export default function Europe(){

    const maxWidth = 0;

    return(
        <SimpleGrid display="flex"  flexDirection="column" h="100%">
            <Header/>
            <DetailBanner  
            background="./images/europe_page.png"  
            title="Europa" />

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
                    mb={[0,50]} 
                    display="flex" 
                    flexDir={["column","row"]}
                    alignSelf={{base:"center"}}
                    flexWrap="wrap">
                    <Text 
                    fontSize={["14px","24px"]} 
                    align="justify" 
                    lineHeight={["21px","36px"]} 
                    fontWeight={400}>
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a
                        península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste
                        pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio,
                        o Cáucaso, e o mar Negro a sudeste
                    </Text>
                </Box>
                <Box ml={["15px","100px"]} mt={55}>
                    <HStack direction="column" spacing={65} >
                        <Info amount={50} description="países"/>
                        <Info amount={600} description="línguas"/>
                        <Info amount={27} description="cidades+100"/>
                    </HStack>
                </Box>
            </Flex>
        <Galery>
            <Card  
            image="./images/london.png"
            flag="./images/london_flag.png"
            country="Londres"
            city="Reino Unido"
            />
            <Card 
            image="./images/paris.png"
            flag="./images/paris_flag.png"
            country="Paris"
            city="France"
            />
            <Card 
            image="./images/rome.png"
            flag="./images/rome_flag.png"
            country="Roma"
            city="Itália"
            />
            <Card 
            image="./images/praga.png"
            flag="./images/praga_flag.png"
            country="Praga"
            city="República Tcheca"
            />
            <Card 
            image="./images/amsterda.png"
            flag="./images/holande_flag.png"
            country="Amsterdã"
            city="Holanda"
            />
        </Galery>
    </Flex>

        </SimpleGrid>
    )
}