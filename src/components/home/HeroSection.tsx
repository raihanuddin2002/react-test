import { Carousel } from "react-responsive-carousel";
import SliderImage1 from '../../assets/slider-image1.png'
import SliderImage2 from '../../assets/slider-image2.png'
import SliderImage3 from '../../assets/slider-image3.png'
import Slide from "../ui/slider/Slide";

export default function HeroSection() {
    return (
        <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
            <Slide
                title="MAKE BELIEVE"
                description="Sales on selected SONY products"
                imageSrc={SliderImage1}
            />

            <Slide
                title="PICTURE PERFECT DEALS"
                description="Browse our second-hand gear market"
                imageSrc={SliderImage2}
            />

            <Slide
                title="NEW ARRIVALS"
                description="The newest and latest advances in technology"
                imageSrc={SliderImage3}
            />
        </Carousel>
    )
}
