import { Container } from '../ui/container/Container'
import ItemsCard from '../ui/card/ItemsCard'
import cameraImage from '../../assets/camera.png'
import lensImage from '../../assets/lens.png'
import bagImage from '../../assets/bag.png'

export default function DisplayItems() {
    return (
        <Container className='py-[2.5rem] lg:py-[3rem] w-[90%] lg:w-[80%]'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <ItemsCard
                    title="Cameras"
                    description='Browse through our selection of cameras'
                    imageSrc={cameraImage}
                />
                <ItemsCard
                    title="Lenses"
                    description='Find the sharpest lens for your photoshoot'
                    imageSrc={lensImage}
                />
                <ItemsCard
                    title="Accessories"
                    description='Highest quality accessories to fit your gear'
                    imageSrc={bagImage}
                />
            </div>
        </Container>
    )
}
