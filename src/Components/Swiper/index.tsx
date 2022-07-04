import{Flex,Image} from '@chakra-ui/react'
import { Pagination, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
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
            <Image src="./images/europe.png" />
            <Details 
                title="Europa" 
                description="O continente mais antigo." 
                href="/europe"
            />
        </SwiperSlide>
        <SwiperSlide>
            <Image src="./images/asia.jpg" />
            <Details 
                title="Asia" 
                description="O continente mais antigo." 
                href="/asia"
                />

        </SwiperSlide>
        <SwiperSlide>
            <Image src="./images/africa.jpg" />
            <Details 
            title="Africa" 
            description="O continente mais antigo." 
            href="/africa"
            />
        </SwiperSlide >
        <SwiperSlide>
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