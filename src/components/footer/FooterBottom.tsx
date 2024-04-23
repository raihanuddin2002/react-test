import { Container } from "../ui/container/Container";
import callImage from '../../assets/call.png'
import messageImage from '../../assets/message.png'

export default function FooterBottom() {
    return (
        <section className="pt-10">
            <Container className="grid grid-cols-1 lg:grid-cols-3 justify-between text-white">
                <div className="col grid grid-cols-2 lg:grid-cols-4 justify-between gap-10 mb-10 lg:mb-5">
                    <ul>
                        <li className="text-lg font-semibold mb-2">Shop</li>
                        <li className="text-[#737373] text-sm">Cameras</li>
                        <li className="text-[#737373] text-sm">Lenses</li>
                        <li className="text-[#737373] text-sm">Accessories</li>
                    </ul>

                    <ul>
                        <li className="text-lg font-semibold mb-2 opacity-0">Hidden</li>
                        <li className="text-[#737373] text-sm">Studio</li>
                        <li className="text-[#737373] text-sm">Brands</li>
                        <li className="text-[#737373] text-sm">Extreme</li>
                    </ul>

                    <ul>
                        <li className="text-lg font-semibold mb-2">Used</li>
                        <li className="text-[#737373] text-sm">Buy & Sell</li>
                        <li className="text-[#737373] text-sm">Policy</li>
                        <li className="text-[#737373] text-sm">Report Fraud</li>
                    </ul>

                    <ul>
                        <li className="text-lg font-semibold mb-2">About</li>
                        <li className="text-[#737373] text-sm">Contact</li>
                        <li className="text-[#737373] text-sm">Our story</li>
                        <li className="text-[#737373] text-sm">Blog</li>
                    </ul>
                </div>

                <div className="col flex items-center justify-center mb-10 lg:mb-0">
                    <button className="w-[60px] h-[25px] bg-red-500 text-sm me-3 focus:outline-none hover:bg-[#AE3131]">USD</button>
                    <button className="w-[60px] h-[25px] border-2 border-[#737373] text-[#737373] text-sm focus:outline-none hover:bg-[#AE3131] hover:border-0 hover:text-white">EUR</button>
                </div>

                <div className="col mb-5">
                    <h2 className="mb-3 font-semibold">Contact Information</h2>

                    <div className="flex items-center mb-4">
                        <img src={callImage} alt="" className="h-[15px]" />
                        <p className="ms-3 text-[12px] text-[#737373]">+972 123-456-78</p>
                    </div>
                    <div className="flex items-center">
                        <img src={messageImage} alt="" className="h-[15px]" />
                        <p className="ms-3 text-[12px] text-[#737373]">name@camera.com</p>
                    </div>
                </div>

            </Container>

            <p className="text-center text-[#737373] text-sm mt-5">© 2023 PIXEL. All Rights Reserved</p>
        </section>
    )
}
