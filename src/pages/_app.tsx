import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import{theme} from './../../styles/theme'
import "./../../styles/styles.css";
import "./../../styles/global.css"

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'


function MyApp({ Component, pageProps }:AppProps) {
  return (
    <ChakraProvider resetCSS theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
