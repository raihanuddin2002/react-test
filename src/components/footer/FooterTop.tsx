import { Container } from "../ui/container/Container";
import logo from '../../assets/logo.png'
import map from '../../assets/map.png'
import parkImage from '../../assets/adress-park.png'
import clockImage from '../../assets/clock.png'

export default function FooterTop() {
    return (
        <section>
            <Container className="w-[90%] lg:w-[80%] grid grid-cols-1 lg:grid-cols-3 justify-between items-center text-white border-b-2 border-[#737373] pb-10">

                <div className="col grid grid-cols-1 flex-row-reverse lg:grid-cols-2 items-center gap-x-5 mb-5 mt-5">
                    <div className="mb-10 lg:mb-0">
                        <img src={map} className="w-full" />
                    </div>

                    <div>
                        <h3 className="mb-4">Come visit us!</h3>
                        <div className="flex items-center mb-3 lg:mb-5">
                            <img src={parkImage} alt="" />
                            <p className="ms-3 text-[10px] text-[#737373]">71 Park Lane, London SW43 2LW</p>
                        </div>
                        <div className="flex items-center">
                            <img src={clockImage} alt="" />
                            <p className="ms-3 text-[10px] text-[#737373]">Sunday to Friday 8:00 - 21:00</p>
                        </div>
                    </div>
                </div>

                <div className="col flex items-center mb-10 mt-5 lg:mt-0">
                    <img src={logo} alt="logo" className="mx-auto lg:mt-0" />
                </div>

                <div className="col">
                    <h2 className="mb-3">Join our newsletter for exclusive offers!</h2>

                    <div className="flex gap-x-1">
                        <input type="text" className="bg-[#E9E9E9] w-2/4 h-[30px] text-[10px] text-black px-2 focus:outline-none" placeholder="Name" />
                        <input type="text" className="bg-[#E9E9E9] w-2/4 h-[30px] text-[10px] text-black px-2 focus:outline-none" placeholder="Email Adress" />
                    </div>
                </div>

            </Container>
        </section>
    )
}
