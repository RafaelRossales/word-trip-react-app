import { Flex, Image,Box, Stack } from "@chakra-ui/react";
import TravelType from "./TravelType";

export default function TravelTypes(){

    return(
        <Flex 
            alignSelf="center"
            mt={['36px','81px']}
            w= {['275px','1160px']}
            display="flex" 
            flexDirection ="row"
            flexWrap={['wrap','nowrap']}
            justifyContent="space-around"
            h={['120px','145px']}>

                <TravelType 
                    imagePath="/images/cocktail.png" 
                    place="Vida Noturna"/>

                <TravelType 
                    imagePath="/images/surf.png" 
                    place="Praia"/>

                <TravelType 
                    imagePath="/images/modern.png" 
                    place="Moderno"/>

                <TravelType 
                    imagePath="/images/classic.png" 
                    place="Clássico"/>

                <TravelType 
                    imagePath="/images/earth.png" 
                    place="e mais..."/>

        </Flex>
    )
}