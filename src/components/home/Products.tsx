import { Container } from "../ui/container/Container";
import ProductCard1 from "../ui/card/ProductCard1";
import lensKitImage from '../../assets/2lens-kit.png'
import blackMiniImage from '../../assets/blackMiniImage.png'
import droneImage from '../../assets/drone.png'
import standImage from '../../assets/stand.png'
import eosImage from '../../assets/eos.png'
import ProductCard2 from "../ui/card/ProductCard2";

export default function Products() {
    return (
        <section className="my-5">
            <Container className="w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-5 content-stretch">
                <ProductCard1
                    title='2 Lens Kit'
                    brand='Canon'
                    productImage={lensKitImage}
                    rating='4.8'
                    duration="17h 30m"
                    price={1200}
                />

                <ProductCard2
                    title='EOS R5'
                    brand='Canon'
                    description="
                        45MP Full-Frame CMOS Sensor,
                        Sensor-Shift Image Stabilization,
                        DIGIC X Image Processor,
                        8K30 Raw Video
                    "
                    rating='4.6'
                    duration="2h 47m"
                    price={3699}
                    productImage={eosImage}
                />
                <ProductCard2
                    title='Mavic 3'
                    brand='DJI'
                    description="
                        20MP 4/3 CMOS Hasselblad,
                        4K Slow Motion at 120 fps,
                        f/2.8 to f/11 Adjustable Aperture,
                        DJI RC Remote Included
                    "
                    rating='4.7'
                    duration="21h 3m"
                    price={1599}
                    productImage={droneImage}
                />
                <ProductCard2
                    title='Carbon Fiber Tripod'
                    brand='Benro'
                    description='
                        Load Capacity: 26.4 lb,
                        Max Height: 64.2",
                        Min Height: 16.1",
                        Folded Length: 16.1"
                    '
                    rating='4.2'
                    duration="2h 47m"
                    price={319}
                    productImage={standImage}
                />
                <ProductCard2
                    title='HERO 11 Black Mini'
                    brand='GoPro'
                    description="
                        24.7MP Improved Performance,
                        Smooth 5.0 Image Stabilization,
                        8x Slow-Motion Video,
                        5.3K60/2.7K240 Video
                    "
                    rating='4.4'
                    duration="7h 38m"
                    price={289}
                    productImage={blackMiniImage}
                />
            </Container>
        </section >
    )
}
