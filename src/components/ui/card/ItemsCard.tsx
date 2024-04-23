import { Container } from "../container/Container"
import ArrowImage from '../../../assets/right-arrow.png'

type ItemsCardProps = {
    title: string
    description: string
    imageSrc: string
}

export default function ItemsCard({ title, description, imageSrc }: ItemsCardProps) {
    return (
        <div className='relative'>
            <img src={imageSrc} />

            <div className='layer h-full w-full absolute top-0 bg-[rgba(0,0,0,0.3)] hover:bg-[rgba(0,0,0,0)]'>
                <Container className='w-[90%] h-full flex items-end pb-5'>
                    <div className="text-start w-full">
                        <h1 className="text-lg lg:text-2xl text-white font-bold">{title}</h1>

                        <div className="flex justify-between items-center">
                            <p className="text-[#B4B4B4] text-[12px] m-0">{description}</p>

                            <div className="display-items-image">
                                <img src={ArrowImage} alt="right-arrow" className="w-[25px] h-[25px] cursor-pointer drop-shadow-xl" />
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}
