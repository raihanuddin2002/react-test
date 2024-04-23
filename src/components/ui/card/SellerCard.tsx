import checkImage from '../../../assets/checkmark.png'
import { Container } from '../container/Container'

type SellerCardProps = {
    sellerName: string
    designation: string
    sellerImage: string
    description: string
}

export default function SellerCard({ sellerName, designation, sellerImage, description }: SellerCardProps) {
    return (
        <section>
            <div className="flex gap-2">
                <div>
                    <img src={sellerImage} />
                </div>
                <div>
                    <h5 className="text-sm font-bold">{sellerName}</h5>
                    <h6 className="text-[10px] mb-2">{designation}</h6>
                    <div className="flex gap-x-1">
                        <img src={checkImage} className='h-[10px]' />
                        <p className="text-[10px] text-[#737373]">PIXEL Verified</p>
                    </div>
                </div>
            </div>

            <Container className='w-[85%] mt-3'>
                <ul className="mb-2 list-disc">
                    {
                        description && description.split(',').map((text, index) => {
                            return <li key={index} className="text-[12px] text-[#737373]">{text}</li>
                        })
                    }
                </ul>
            </Container>
        </section>
    )
}
