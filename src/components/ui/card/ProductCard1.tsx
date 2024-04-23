import { useRef, useState } from "react";
import starImage from '../../../assets/star.png'
import clockImage from '../../../assets/clock.png'
import loveImage from '../../../assets/love.png'
import arrowImage from '../../../assets/arrow.png'
import { cn } from "../../../helpers/cn";

type ProductCard1Props = {
    title: string
    brand: string
    price: number
    duration: string
    productImage: string
    rating: string
}

export default function ProductCard1({
    title,
    brand,
    price,
    duration,
    productImage,
    rating
}: ProductCard1Props) {
    const [selectedBtn, setSelectedBtn] = useState(1);
    const [count, setCount] = useState(1);
    const buttonBgRef = useRef<HTMLDivElement | null>(null)

    const totalPrice = (price * count) * selectedBtn

    return (
        <div className="pe-5 mb-5 lg:mb-0">
            <div className="relative overflow-hidden">
                <img src={productImage} className="w-full" />

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

            <div className="flex justify-between border border-[#9a8a8a] rounded-xl relative mb-2 w-full">
                <button
                    onClick={() => {
                        buttonBgRef.current?.setAttribute('style', 'left: 0; transition: all 0.5s ease-in-out; color:white !important;')

                        setSelectedBtn(1)
                    }}
                    className={cn("w-2/4 text-sm z-10 py-[2px] focus:outline-none", { 'text-white': selectedBtn === 1 })}
                >
                    1 len
                </button>

                <button
                    onClick={() => {
                        buttonBgRef.current?.setAttribute('style', 'left: 50%; transition: all 0.5s ease-in-out; color:white !important;')

                        setSelectedBtn(2)
                    }}
                    className={cn("w-2/4 text-sm z-10 py-[2px] focus:outline-none", { 'text-white': selectedBtn === 2 })}
                >
                    2 lens kit
                </button>

                <div
                    ref={buttonBgRef}
                    className={"w-2/4 h-full bg-red-500 rounded-xl py-[2px] absolute z-0 left-0"}
                >
                </div>
            </div>

            {/* Counter */}
            <div className="flex items-center w-full mb-3">
                <button
                    className="bg-red-500 text-white text-sm px-3 rounded-s-xl py-[3px]"
                    onClick={() => setCount(prev => {
                        if (prev === 1) return prev
                        return prev - 1
                    })}
                >
                    -
                </button>

                <div className="text-center w-full border-t border-b border-[#9a8a8a] m-0">
                    {count}
                </div>

                <button
                    className="bg-red-500 text-white text-sm px-3 rounded-e-xl py-[3px]"
                    onClick={() => setCount(prev => prev + 1)}
                >
                    +
                </button>
            </div>

            {/* pricing */}
            <div className="flex justify-between">
                <div className="flex items-center">
                    <img src={clockImage} alt="clock" className="h-[15px] w-[15px] me-2" />
                    <p className="text-[12px]">{duration}</p>
                </div>

                <h2 className="font-semibold text-sm">${totalPrice}</h2>
            </div>
        </div>
    )
}
