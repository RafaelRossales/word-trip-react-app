import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    colors:{
        white:{
            '900':'#F5F8FA'
        },
        gray:{
            '900':'#47585B'
        },
        yellow:{
            '900':'#FFBA08'
        }
    },
    fonts:{
        heading:'Poppins',
        body:'Poppins'
    },
    styles:{
        global:{
            body:{
                p:'0px',
                m:'0px',
                bg:'white.900',
                // color:'gray.900'
            }
        }
    }
})