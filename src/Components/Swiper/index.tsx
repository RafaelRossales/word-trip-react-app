import{Flex,Image,Box,Text} from '@chakra-ui/react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import DarkLayer from './DarkLayer';
import Details from './Details';

export default function SwiperComponent(){
  return (
    <Flex
        alignSelf="center"
        w= {["375px","1240px"]}
        h= {["250px","450px"]}
        mt="52px"
        mb="40px"
    >
        <Swiper 
        modules={[Pagination,Navigation]} 
        className="mySwiper" 
        navigation 
        pagination={{dynamicBullets: true}}
        >
            {/* <DarkLayer width={1240} height={450}/> */}
        <SwiperSlide>
            <Image src="./images/europe.png" />
            <Details 
                title="Europa" 
                description="O continente mais antigo." 
                href="/europe"
            />
        </SwiperSlide>
        <SwiperSlide>
            {/* <DarkLayer width={1240} height={450}/> */}
            <Image src="./images/asia.jpg" />
            <Details 
                title="Asia" 
                description="O continente mais antigo." 
                href="/asia"
                />

        </SwiperSlide>
        <SwiperSlide>
            {/* <DarkLayer width={1240} height={450}/> */}
            <Image src="./images/africa.jpg" />
            <Details 
            title="Africa" 
            description="O continente mais antigo." 
            href="/africa"
            />
        </SwiperSlide >
        <SwiperSlide>
            {/* <DarkLayer width={1240} height={450}/> */}
            <Image src="./images/northAmerica.jpg" />
            <Details 
            title="América do Norte" 
            description="O continente mais antigo." 
            href="/NorthAmerica"
            />
        </SwiperSlide >
        <SwiperSlide>
            <Image src="./images/southAmerica.jpg" />
            <Details 
            title="América do Sul" 
            description="O continente mais antigo." 
            href="/SouthAmerica"
            />
        </SwiperSlide >
    </Swiper>
    </Flex>
);
};