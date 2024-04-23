import { Container } from "../container/Container";
import ArrowImage from '../../../assets/right-arrow.png'

type SlideProps = {
    title: string
    description: string
    imageSrc: string
}
export default function Slide({ title, description, imageSrc }: SlideProps) {
    return (
        <div>
            <img src={imageSrc} className="h-[70vh] object-cover" />

            <Container className="relative">
                <div className="absolute bottom-[70px] text-start w-full">
                    <h1 className="text-3xl lg:text-5xl text-white mb-2 font-bold" style={{ textShadow: '0px 0px 10px black' }} >{title}</h1>

                    <div className="flex items-center">
                        <p className="text-white" style={{ textShadow: '0px 0px 10px black' }}>{description} </p>
                        <div className="ms-5">
                            <img src={ArrowImage} alt="right-arrow" className="w-[20px] h-[25px] cursor-pointer drop-shadow-xl" />
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    )
}
