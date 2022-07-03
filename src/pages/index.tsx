import { SimpleGrid,Flex,Stack,Text,Box } from "@chakra-ui/react";
import HomeBanner from "../Components/Banner/HomeBanner";
import Divider from "../Components/Divider";
import Header from "../Components/Header";
import SwiperComponent from "../Components/Swiper";
import TravelTypes from "../Components/TravelTypes";

export default function Home() {


  return (
    <Flex 
        w="100%"
        maxWidth={1480} 
        mx="auto"
        display="flex"
        flexDir="column"
      >
        <Header/>
        <HomeBanner/>
        <TravelTypes/>
        <Divider/>

        <Text
          pos="relative"
          alignSelf="center" 
          mt= {["24px", "132px"]}
          w={["297px","839px"]} 
          fontWeight={500}
          fontSize={["20px","36px"]}
          display="flex"
          flexDir="column"
          flexWrap="wrap"
          align="center"
        >
          <span>Vamos nessa?</span>
          <span>Então escolha seu continente</span>
        </Text>
          <SwiperComponent/>
    </Flex>
  )
}
