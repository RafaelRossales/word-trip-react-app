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
        <SwiperSlide>
            <Details 
                title="Europa" 
                description="O continente mais antigo." 
                href="/europe"
            />
            <Image src="./images/europe.png" />
        </SwiperSlide>
        <SwiperSlide>
            <DarkLayer width={1240} height={450}/>
            <Details 
                title="Asia" 
                description="O continente mais antigo." 
                href="/asia"
            />
            <Image src="./images/asia.jpg" />
        </SwiperSlide>
        <SwiperSlide>
            <DarkLayer width={1240} height={450}/>
            <Details 
            title="Africa" 
            description="O continente mais antigo." 
            href="/africa"
            />
            <Image src="./images/africa.jpg" />
        </SwiperSlide >
        <SwiperSlide>
            <DarkLayer width={1240} height={450}/>
            <Details 
            title="América do Norte" 
            description="O continente mais antigo." 
            href="/africa"
            />
            <Image src="./images/northAmerica.jpg" />
        </SwiperSlide >
    </Swiper>
    </Flex>
);
};