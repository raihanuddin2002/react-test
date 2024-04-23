import ArrowImage from '../../../assets/right-arrow.png'

type ItemsCardProps = {
    title: string
    description: string
    imageSrc: string
}

export default function BlogCard({ title, description, imageSrc }: ItemsCardProps) {
    return (
        <div className="flex gap-3">
            <div className="w-2/5">
                <img src={imageSrc} alt="editingImage" className='h-full' />
            </div>

            <div className="w-3/5 grid content-stretch">
                <h1 className="text-md font-semibold">{title}</h1>
                <p className="text-[0.8rem] text-[#1A1A1B]">
                    {description}
                </p>

                <div className="flex items-center border-b-[1px] w-[100px] h-[20px] mt-3 border-[#737373] transition-all delay-100 ease-in-out hover:border-red-500  hover:transition-all hover:delay-100 hover:ease-in-out">
                    <p className="text-[12px] text-[#737373] me-3 cursor-pointer transition-all delay-100 ease-in-out hover:me-1 hover:text-red-500 hover:transition-all hover:delay-100 hover:ease-in-out"
                    >
                        Read more
                    </p>

                    <div>
                        <img src={ArrowImage} alt="ArrowImage" className="w-[15px] h-[15px]" />
                    </div>
                </div>
            </div>
        </div>
    )
}
