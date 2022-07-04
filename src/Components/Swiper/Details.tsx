import { Flex,Text } from "@chakra-ui/react";
import Link, {LinkProps} from 'next/link'
import DarkLayer from "./DarkLayer";
interface DetailsProps extends LinkProps{
    title:string;
    description:string
}
export default function Details({title,description,...rest}:DetailsProps){
    return(
        <Link {...rest}>
        <Flex
            cursor="pointer"
            pos="absolute"
            w="324px"
            h="116px"
            display="flex"
            flexDir="column"
            justifyContent="center"
            alignItems="center"
            >
            <Text 
            color="white.900" 
            fontSize={['24px','48px']}
            fontWeight={700}>
                    {title}
            </Text>
            <Text 
            color="white.900" 
            fontSize={['14px','24px']}
            fontWeight={700}
            >
                {description}
            </Text>
        </Flex>
            </Link>
    )
}