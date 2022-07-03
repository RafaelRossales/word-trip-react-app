import { SimpleGrid,Flex,Box,Text,HStack, useBreakpointValue,Image} from "@chakra-ui/react";

interface TravelTypesProps{
    imagePath:string;
    place:string
}

export default function TravelType({imagePath,place}:TravelTypesProps){

    let isWidescreen = useBreakpointValue({
        base:false,
        lg:true
    });

    var alignItem = 'center';
    var display="flex";
    var textMargin = '8px';



    return(
    
        <Box 
            display='flex' 
            flexDirection={['row','column']}
            alignItems={alignItem} 
            >
            {isWidescreen ?
                <div>   
                    <Image src={imagePath}/>
                </div> :

                <div>
                    <Box 
                    w='8px' 
                    h="8px" 
                    bg="yellow.500" 
                    borderRadius="100%"
                    ></Box>
                </div>
            }

            <Box 
                mt={['0px','24px']}
                ml={['8px', '0px']}
                fontSize="18px"
                fontWeight={[500, 600]}
                textAlign="center"
                >
                {place}
                </Box>
        </Box>
    )
}