import { Flex,Image,Box } from "@chakra-ui/react";
import Logo from "../Logo";
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Header(){

    const { asPath } = useRouter();

    return(
        <Flex
            display="flex"
            direction="row"
            justifyContent="center"
            alignItems="center"
            w={{ base: "375px",lg:"100vw" }}
            h="50px">

        { asPath === '/' || 
            <Link href="/">
                <Image
                    cursor="pointer"
                    position="absolute"
                    left={{ base: "16px",lg:"75px" }}
                    src="./images/chevron-left.png"
                />
            </Link>
        }

            <Logo/>
        </Flex>
    )
}