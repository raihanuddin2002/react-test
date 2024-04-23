import starImage from '../../../assets/star.png'
import clockImage from '../../../assets/clock.png'
import loveImage from '../../../assets/love.png'
import arrowImage from '../../../assets/arrow.png'
import { Container } from "../container/Container";

type ProductCard2Props = {
    title: string
    brand: string
    description: string
    price: number
    duration: string
    productImage: string
    rating: string
}

export default function ProductCard2({
    title,
    brand,
    price,
    duration,
    description,
    productImage,
    rating
}: ProductCard2Props) {
    return (
        <div className="border-t lg:border-t-0 lg:border-l border-[#B4B4B4] px-5 mb-5 lg:mb-0">
            <div className="relative overflow-hidden">
                <img src={productImage} className="w-full h-full" />

                <div className="flex justify-end absolute top-[10px] right-[20px]">
                    <img src={loveImage} className="w-[20px] h-[20px] me-1" />

                    <div className="relative comparison-icon">
                        <img src={arrowImage} className="w-[20px] h-[20px] z-10 comparison-icon" />
                        <div className="absolute top-0 right-[-200px] bg-[#FCF6F6] w-[100px] ps-1 text-[9px] z-0 comparison-text">Add to comparison</div>
                    </div>
                </div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <h1 className="font-semibold">{title}</h1>
                <div className="rating flex">
                    <img src={starImage} className="h-[10px] w-[10px] me-1 mt-[2px]" />
                    <p className="text-[11px]">{rating}</p>
                </div>
            </div>

            <h4 className="text-[12px] mb-2">{brand}</h4>

            <Container>
                <ul className="mb-2 list-disc">
                    {
                        description && description.split(',').map((text, index) => {
                            return <li key={index} className="text-[10px] text-[#737373]">{text}</li>
                        })
                    }
                </ul>
            </Container>
            {/* pricing */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={clockImage} alt="clock" className="h-[15px] w-[15px] me-2" />
                    <p className="text-[12px]">{duration}</p>
                </div>

                <h2 className="font-semibold text-sm">${price}</h2>
            </div>
        </div>
    )
}
